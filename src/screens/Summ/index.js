import React from "react";
// Images
import recursiveSummarization from "../../assets/recursive_summarization.png";
import preprocessing from "../../assets/preprocessing.png";
import { articleStyles } from "../../styles";
import {anOldHope, CopyBlock } from "react-code-blocks";


const fact_prompt = "Your task is to take the context of a conversation, and a paragraph, and extract any pertinent facts from it. \
The facts should only cover new information introduced in the paragraph. The context is only for background; do not use it to generate facts. \n \n\
You will also generate a new context, by taking the old context and modifying it if needed to account for the additional paragraph. You do not need \
to change the old context if it is suitable; simply return it again. \n \n\""

const fact_extraction_example = "\
\
Here is an example: \n\n\
\
Context: The conversation so far has covered the backround of the speaker. He is an RPA developer. \n \n\
\
Chunk: We had a client where they would, they had like a huge database legacy database of like their inventory \
in the store. Whenever they would whenever they would do any type of like inventory accounts, they would shut \
down for like eight hours but they wouldn't go in there and see the differences between like the database and \
it will take them 16 hours to do. Yes, insane. We built a bot that will go in there and do like we like to call \
it, auditing and reconciliation of all the inventories, as long as they gave us like a spreadsheet, and you \
could do it in an hour. \n \n\
"

const fact_extraction_example_gen = "Facts: \n \
- A client had a large legacy database for inventory in their store.  \n \
- The inventory reconciliation process would shut down the store for 8 hours.  \n \
- The process of reconciling the database would take 16 hours to complete.  \n \
- A bot was built to perform inventory auditing and reconciliation.  \n \
- The bot can complete the process in an hour as long as a spreadsheet is provided.  \n \
\n \
New Context: An RPA developer talks about a bot he made. The bot was created to reconcile \
a client's inventory database which used to take 16 hours to complete and shut down the store \
for 8 hours, and can now be done in an hour. \n \n\
"

export const Summ = () => {
  return (
    <div style={articleStyles.container}>
      {/* Back Button */}
      <div style={articleStyles.backButton}><a style={articleStyles.links} href={"/"}>← Home</a></div>
      <div style={articleStyles.gutter}>
        {/* Any left gutter content goes here */}
      </div>
      <div style={articleStyles.textContainer}>
        {/* Title */}
        <h1 style={articleStyles.title}>Summ: Transcript Search and Summarization</h1>
        {/* Subtitle */}
        <h2 style={articleStyles.subtitle}>Summ provides intelligent search and question-answering across large sets of transcripts.</h2>
        {/* Author Section */}
        <div style={articleStyles.authorSection}>
          <p style={articleStyles.date}>Feb 20th, 2023</p>
          <p>Markie Wagner and Yasyf Mohamedali</p>
          <hr style={articleStyles.divider} />
        </div>
        {/* Main Content */}
        <div style={articleStyles.body}>
          <p>We built Summ, a tool that provides intelligent search and question-answering across large sets of transcripts. Read on below for how we did it, or just check it out <a href="https://github.com/yasyf/summ/">here</a>!</p>
          <p>Yasyf and I are both very active users of call note-taking tools like Otter. While doing a recent deep-dive on finance automation, we realized that we had built up a large corpus of user interview transcripts, but were struggling to pattern-match across them. Getting answers to simple questions like "What are the most common metrics that customers track in their HR departments?" was taking hours to aggregate. To answer that question, we would need to write a handful of search queries, comb through transcripts to pull in context, copy the results into a doc, and then cobble together a final answer. </p>
          
          <h3 style={articleStyles.heading}>Goal</h3>
          <p>We set out to build a tool that could thoroughly answer questions about a set of uploaded transcripts. It needed to surface and draw up all relevant information facts across all the conversations and filter by transcript tags such as department, role, and company industry.</p>

          <h3 style={articleStyles.heading}>How We Built It</h3>
          <h4 style={articleStyles.heading}>Data Pre-processing: Extracting and Embedding the Facts</h4>
          <p>In the data pre-processing step of Summ, we begin by taking each transcript, which is stored as a `.txt` file. Summ supports generating tags based on the title and content of the transcript. For example, you can add tags to a transcript that specify the speaker's department, title, or industry. Summ supports generating tags from the entirety of the transcript, supporting custom rules and keywords.</p>
          
          <p><i>Fact Extraction Instructions</i></p>
          <CopyBlock
            text={fact_prompt}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>
            For each paragraph in a transcript, we convert the paragraph into a list of facts and update a running summary of the transcript to provide context for fact generation. Fact generation can be configured to exclude certain speakers, such as yourself.
          </p>

          <p><i>Fact Extraction Example Context and Paragraph</i></p>
          <CopyBlock
            text={fact_extraction_example}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />


          <p><i>Fact Extraction Example Generated Facts</i></p>
          <CopyBlock
            text={fact_extraction_example_gen}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>For each extracted fact, we also determine the most likely query that would produce the fact. For example, the fact "The best RPA provider today is UiPath" would have the query "Who is the best RPA provider today?". Both the facts and the queries are then stored as embeddings in <a href="https://www.pinecone.io/">Pinecone</a> as a search may take the form of a question, or look more like a fact. </p>

          <p>For each fact embedding, the following metadata is included: fact, summary of surrounding paragraph, surrounding paragraph facts, and interviewee tags. For each query embeddings, the same metadata is included, with an additional pointer to the fact that this query was generated from.</p>

          <img style={articleStyles.embeds} src={preprocessing} />
          <p style={{ ...articleStyles.sidenotes, textAlign: "center" }}>Pre-Processing Pipeline</p>

          <p>In summary, the data pre-processing step of Summ involves extracting and embedding the facts from the transcripts as well as using user-created logic to generate transcript tags. The embeddings are stored in Pinecone along with associated metadata so we can search based on transcript tags (eg, only pull from calls with executives). </p>

          <h4 style={articleStyles.heading}>Inference: Recursive Summarization and "Database" Creation</h4>

          <p>For the inference step, we pick the best result of three methods. The first two methods use LLMs to build structured datasets, creating and populating a "database" with relevant metrics to answer a question. This structured data is then used by the LLM to run calculations on (eg. what percent of users report using spend management features). The last method uses recursive summarization, surfacing and summarizing to eventually answer the query. </p>

          <p><b>Method 1: Structured Data Generation (JSON)</b></p>

          <p>With our first method, we ask GPT what kind of structured data (JSON format) it would need to sufficiently answer the stated question. For each field, it also generates a prompt that it would need to ask itself with each paragraph to extract the relevant metric.</p>

          <p><i>JSON Generation Instructions</i></p>
          <CopyBlock
            text={"add code here"}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p><i>JSON Generation Example</i></p>
          <CopyBlock
            text={"add code here"}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>Using the generated prompts, with each paragraph, the LLM updates the JSON document to include the paragraph's new information.</p>
          <p>After processing all paragraphs, we then ask the model to clean up the document it's collected, formatting it for use in answering the specific question. Finally, we use this cleaned document to generate an answer to the initial question.</p>

          <p><i>Cleaned Document</i></p>
          <CopyBlock
            text={"add code here"}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p><i>Example Answer</i></p>
          <CopyBlock
            text={"add code here"}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p><b>Method 2: Structured Data Generation (SQL)</b></p>

          <p>Similarly to the first method, we use the LLM to turn the unstructured transcript data into structured data, this time in the form of a populated SQL table.</p>

          <p>We begin by asking the model to generate a SQL schema that would represent a table that could answer the query.</p>

          <p><i>SQL Generation Prompt</i></p>
          <CopyBlock
            text={"add code here"}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>Next, we begin populating the table. For each paragraph, we represent the new information as a set up of updates/inserts to the SQL table.</p>

          <p><i>SQL Update Prompt</i></p>
          <CopyBlock
            text={"add code here"}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>By the end of this process, we've gone from unstructured transcript data into structured SQL data! Finally, GPT cleans the table and uses it to answer the initial question. </p>

          <p><i>Cleaned SQL Table Generated</i></p>
          <CopyBlock
            text={"add code here"}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p><b>Method 3: Recursive Summarization</b></p>

          <p>For the second method, we use recursive summarization. Recursive summarization is necessary here due to the 8k token limit imposed by the OpenAI API. </p>


          <script id="asciicast-Ys2rH36AlF7RIdzZbJiorhMcc" src="https://asciinema.org/a/Ys2rH36AlF7RIdzZbJiorhMcc.js" async></script>

          <p>First, we determine a set of sub-questions necessary to answer the original question. For each of these sub-questions, we determine a set of queries that would render relevant facts. Next, for each query, we search the vector store for queries or facts that are similar to the embedded query. For each query nearby in vector space, we pull the corresponding fact. We then have a list of facts. </p>

          <p>Finally, we recursively summarize until the original question is answered. This involves summarizing the facts to answer the sub-query, summarizing the queries to answer the sub-question, and summarizing the sub-questions to answer the original question. The final summary is then returned to the user.</p>

          <p>The algorithm roughly works like this: </p>

          <p><i>Psuedocode</i></p>
          <CopyBlock
            text={"add code here"}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />
          <img style={articleStyles.embeds} src={recursiveSummarization} />
          <p style={{ ...articleStyles.sidenotes, textAlign: "center" }}>Recursive Summarization Algorithm</p>

          <p>Each of these computations on the way down and up uses a call to an LLM (in the default case, GPT-3). On the way down, we generate sub-questions and queries that would be necessary to answer the question. On the way up, we ask the LLM to summarize the results of those queries.</p>

          <p>After recursing all the way back up, we have our answer!</p>

          <h4 style={articleStyles.heading}>Final Answer Selection</h4>

          <p>Finally, with the answer produced from the third and final method complete, we ask the model to pick the best answer of the three.</p>

          <p><i>Answer Selection Prompt</i></p>
          <CopyBlock
            text={"add code here"}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>We're sure there are many other amazing methods that could work for answering queries, these were just a few ones to start. If you have any ideas, feel free to play with the prompts or open a PR with a new method!</p>
          
          <h4 style={articleStyles.heading}>Infrastructure Used</h4>

          <p>We extensively used Langchain's abstractions for managing prompts — they were great, and the built-in LLM caching feature saved us days of work. It was convenient to have time-tested prompts available for various use cases to iterate from, and we appreciated that we were able to get started right away, but also that the library could accommodate us as our needs became more complex.</p>
          
          <p>We needed somewhere to store and efficiently query the embeddings, and we discovered Pinecone! We were ready for it to be as complicated as the first time we used mySQL, but it just worked.</p>

          <h4 style={articleStyles.heading}>Conclusion</h4>

          <p>Use Summ to ask questions about your transcripts! You can get started here.</p>

          <p>To help you think about how you might use Summ, here are some examples of when this came in handy for our friends:</p>

          <p><b>Corinne Riley at Greylock used the tool to compare products during due diligence.</b> As a VC diligencing a market or a specific company, she typically conducts numerous customer and expert calls. She uses Summ to answer questions like "Compare Ramp and Brex products" or "What criteria do customers use to evaluate Ramp and Brex?"</p>
          <p><b>Eric Liu at Notion suggested using Summ to inform messaging and strategy for top of funnel sales.</b> Transcript information can inform outbound emails, marketing on the website, and sales call scripts — you could ask Summ a question like “What are the top reasons that people are inquiring about our software?” or "Which competitors are our leads most concerned about?".</p>
          <p><b>We also recommend using Summ to query voice memos of your own notes, thoughts, or dreams.</b> You can explore your thoughts by using queries like "What are some of my thoughts on rationality?" or  "What are some common themes in my dreams?"</p>


          <p>You can install the library <a href="https://github.com/yasyf/summ/">here</a>, and find the docs <a href="https://summ.readthedocs.io/">here</a>. The library is very modular so we would love to have contributors experiment with different prompts — there's a lot of improvement to be done in that area!</p>
          
          <p>We'd love to hear how you use this! Feel free to shoot us an email at me `at` markiewagner.com or @yasyf on Twitter.</p>
          
        </div>
      </div>
      <div style={articleStyles.gutter}>
        {/* Any right gutter content goes here */}
      </div>
    </div>

  );
};
