
# pip install -U langchain langgraph langchain_openai langchainhub tavily-python
import os
import streamlit as st

os.environ["OPENAI_API_KEY"] =st.secrets["OPENAI"]
os.environ["TAVILY_API_KEY"] =st.secrets["TAVILY"]


page_element = """
<style>
[data-testid="stAppViewContainer"]{
background-image: url("https://th.bing.com/th/id/R.7c186a5dc1c6eba5056201dc567a67e4?rik=zHFUXKGVeogkqw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2f1%2fb%2f160942.jpg&ehk=NXiHPZX6NGHGfBit5uEF%2fPu6HMV8VV%2b8llo7S5k41Cs%3d&risl=&pid=ImgRaw&r=0");
background-size: cover;
}
[data-testid="stHeader"]{
background-color: rgba(0,0,0,0);
}
[data-testid="stToolbar"]{
right: 2rem;
background-image: url("");
background-size: cover;
}
[data-testid="stSidebar"]> div:first-child{
background-image: url("https://img.freepik.com/premium-vector/skyblue-gradient-background-advertisers-gradient-hq-wallpaper_189959-513.jpg");
background-size: cover;
}
</style>
"""

st.markdown(page_element, unsafe_allow_html=True)
st.markdown("<h1 style='text-align: center';>Real Time Stock Web LLM 💬</h1>", unsafe_allow_html=True)
st.markdown("---")

# !pip install --upgrade --quiet langchain-google-genai pillow

# pip install --upgrade langchain

from langchain import hub
from langchain.agents import create_openai_functions_agent
from langchain_openai.chat_models import ChatOpenAI
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.tools.tavily_search import TavilySearchResults


tools = [TavilySearchResults(max_results=1)]
prompt = hub.pull("hwchase17/openai-functions-agent")
llm = ChatOpenAI(model = "gpt-3.5-turbo")

agent_runnable=create_openai_functions_agent(llm, tools, prompt)

from langchain_core.runnables import RunnablePassthrough
from langchain_core.agents import AgentFinish

agent = RunnablePassthrough.assign(
    agent_outcome = agent_runnable
)


def execute_tools(data):
  agent_action = data.pop('agent_outcome')
  tools_to_use = {t.name: t for t in tools}[agent_action.tool]
  observation = tools_to_use.invoke(agent_action.tool_input)
  data['intermediate_steps'].append((agent_action, observation))
  return data

def should_continue(data):
  if isinstance(data['agent_outcome'], AgentFinish):
    return "exit"
  else:
    return "continue"

from langgraph.graph import END, Graph

workflow = Graph()

workflow.add_node("agent", agent)
workflow.add_node("tools", execute_tools)

workflow.set_entry_point("agent")

workflow.add_conditional_edges(
    "agent",
    should_continue,
    {
        "continue" : "tools",
        "exit" : END
    }
)

workflow.add_edge('tools', 'agent')

chain = workflow.compile()
t=st.text_input("Enter Here")
s=st.button("Submit Here")
if s:
  result = chain.invoke({"input" : f"Only do provide the details about the speicifc stock price related query, Do provide the price value response for this query - {t}", "intermediate_steps" : []})
  st.write(result['agent_outcome'])

