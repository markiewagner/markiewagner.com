import React from "react";
// Images
import { anOldHope, CopyBlock } from "react-code-blocks";
import { Helmet } from "react-helmet";
import preprocessing from "../../assets/preprocessing.png";
import recursiveSummarization from "../../assets/recursive_summarization.png";
import { articleStyles } from "../../styles";

const fact_prompt = `Your task is to take the context of a conversation, and a paragraph, and extract any pertinent facts from it.
The facts should only cover new information introduced in the paragraph. The context is only for background; do not use it to generate facts.

You will also generate a new context, by taking the old context and modifying it if needed to account for the additional paragraph. You do not need
to change the old context if it is suitable; simply return it again.`;

const fact_extraction_example = `Here is an example:

Context: The conversation so far has covered the backround of the speaker. He is an RPA developer.

Chunk: We had a client where they would, they had like a huge database legacy database of like their inventory
in the store. Whenever they would whenever they would do any type of like inventory accounts, they would shut
down for like eight hours but they wouldn't go in there and see the differences between like the database and
it will take them 16 hours to do. Yes, insane. We built a bot that will go in there and do like we like to call
it, auditing and reconciliation of all the inventories, as long as they gave us like a spreadsheet, and you
could do it in an hour.
`;

const fact_extraction_example_gen = `Facts:
- A client had a large legacy database for inventory in their store.
- The inventory reconciliation process would shut down the store for 8 hours.
- The process of reconciling the database would take 16 hours to complete.
- A bot was built to perform inventory auditing and reconciliation.
- The bot can complete the process in an hour as long as a spreadsheet is provided.

New Context: An RPA developer talks about a bot he made. The bot was created to reconcile
a client's inventory database which used to take 16 hours to complete and shut down the store
for 8 hours, and can now be done in an hour.
`;

const json_gen_instructions = `Use the query to determine which structured data is needed, and for each, write a specification which will extract and collect the data.

If the query is qualitative, you can return an empty list.
Your response must be in valid JSON format. Do not extract the information yet, just describe how to do so.

The options for type are: {'string', 'number', 'list'}.
The options for collect are: {'list', 'sum', 'count', 'average'}.
The prompt should minimize variance in the response.
`;

const json_gen_ex = `Prompt: What departments were surveyed, and how many times did people prefer Google over Bing?
Response:

[
 {
  {
    "metric": "department",
    "prompt": "Extract the company department that the user of this interview works in.",
    "type": "string",
    "collect": "list"}},
  {
  {
    "metric": "preferred",
    "prompt": "Which of the following options best represents which search engine was preferred?",
    "type": "enum",
    "options": ["GOOGLE", "BING", "OTHER"],
    "collect": "count_unique"
  }
 },
]
`;

const json_cleaned = `[
  {
    "department": ["Engineering", "Sales", "Marketing"],
    "preferred": {"GOOGLE": 3, "BING": 1}
    "feelings": ["Awesome", "Liked It", "Sweet"],
  },
]
`;

const example_answer = `What departments were surveyed, and how many times did people prefer Google over Bing?

People preferred Google over Bing 3 times. Engineering, Sales, and Marketing were surveyed.
`;

const sql_prompt = `Use the query to determine which structured data is needed, and use this to create a SQL table DDL.


Include a confidence score column with values from 0 to 100.
If the query is qualitative, you can return an empty table.


Your response must be valid and complete SQL.


Prompt: {{ query }}


DDL:
`;

const sql_update_prompt = `You will be provided with the schema for a SQL table. Write between zero and three SQL statements which will insert data into the table. You do not need to use all three statements. Do not insert data which is not relevant to the query. Do not insert data which is ambiguous. Do not insert data which is noisy or too long. Only insert data that is derived from the document provided. Do not guess or make up data. For each row, record your confidence that the data is relevant to the query as a number from 0 to 100, using the confidence score column. Your response must be valid and complete SQL.You will be provided with the schema for a SQL table.

Query: {{ query }}
Document:
{{ text }}

Schema:
{{ schema }}

Response:
`;

const sql_answer = `Collecting data (SQLStructurer) for: List the treatments attempted on Cronutt,
and how he responded to each one


Answer: List the treatments attempted on Cronutt, and how he responded to each
one


Treatment         | Response
------------------|-------------------
Behavioral Therapy| Improved, but not completely cured
Medication        | Improved, but not completely cured
Hypnosis          | No improvement
Exposure Therapy  | Improved, but not completely cured
Cognitive Behavioral Therapy | Improved, but not completely cured
`;

const get_facts_code = `def get_facts(question):
  subquestions = how_to_answer(question)
  queries = [query for sq in subquestions for query in relevant_queries(sq)]
  facts = [fact for query in queries for fact in nearby_facts(query)]
return facts`;

const final_answer_prompt = `An answer was produced for a question using several different methods.
First, evaluate how clear, specific, and thorough each answer is.
Then, select the best one and return it inside a code block.
If you are unsure what the best answer is, use the most precise one.
You can clean up the answer as you return it, but do not change the meaning.

The question is: {query}

Method:
{method}
Answer:
{answer}

...
`;

export const Summ = () => {
  return (
    <div style={articleStyles.container}>
      <Helmet>
        <html lang="en" amp />
        <title>Summ: Transcript Search and Summarization</title>
        <meta
          name="description"
          content="A tool that provides intelligent search and
            question-answering across large sets of transcripts."
        />
        <meta property="og:type" content="article" />
        <link
          rel="alternate"
          type="application/json+oembed"
          href="https://asciinema.org/oembed?url=https%3A%2F%2Fasciinema.org%2Fa%2F6dNMwGgNrmBrnFjyFjbJJ2xLR&amp;format=json"
        />
        <link
          rel="alternate"
          type="text/xml+oembed"
          href="https://asciinema.org/oembed?url=https%3A%2F%2Fasciinema.org%2Fa%2F6dNMwGgNrmBrnFjyFjbJJ2xLR&amp;format=xml"
        />
        <meta
          property="og:image"
          content="https://asciinema.org/a/6dNMwGgNrmBrnFjyFjbJJ2xLR.png"
        />
        <meta property="og:site_name" content="Summ" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Summ" />
        <meta name="twitter:title" content="Summ Demo" />
        <meta name="twitter:url" content="https://www.markiewagner.com/summ" />
        <meta
          name="twitter:description"
          content="A tool that provides intelligent search and
            question-answering across large sets of transcripts."
        />
        <meta
          name="twitter:image"
          content="https://asciinema.org/a/6dNMwGgNrmBrnFjyFjbJJ2xLR.png"
        />
      </Helmet>
      {/* Back Button */}
      <div style={articleStyles.backButton}>
        <a style={articleStyles.links} href={"/"}>
          ← Home
        </a>
      </div>
      <div style={articleStyles.gutter}>
        {/* Any left gutter content goes here */}
      </div>
      <div style={articleStyles.textContainer}>
        {/* Title */}
        <h1 style={articleStyles.title}>
          Summ: Transcript Search and Summarization
        </h1>
        {/* Author Section */}
        <div style={articleStyles.authorSection}>
          <p style={articleStyles.date}>Feb 16th, 2023</p>
          <p>Markie Wagner and Yasyf Mohamedali</p>
          <hr style={articleStyles.divider} />
        </div>
        {/* Main Content */}
        <div style={articleStyles.body}>
          <iframe
            title="asciinema"
            src="https://asciinema.org/a/6dNMwGgNrmBrnFjyFjbJJ2xLR/iframe?rows=300&preload=1&autoplay=1"
            id="asciicast-iframe-6dNMwGgNrmBrnFjyFjbJJ2xLR"
            name="asciicast-iframe-6dNMwGgNrmBrnFjyFjbJJ2xLR"
            scrolling="no"
            allowfullscreen="true"
            style={{
              overflow: "hidden",
              marginTop: "30px",
              marginBottom: "30px",
              border: "0px",
              display: "inline-block",
              width: "100%",
              float: "none",
              visibility: "visible",
              height: "300px",
            }}
          ></iframe>
          <p>
            We built Summ, a tool that provides intelligent search and
            question-answering across large sets of transcripts. Read on below
            for how we did it, or just check it out{" "}
            <a
              style={articleStyles.links}
              href="https://github.com/yasyf/summ/"
            >
              here
            </a>
            !
          </p>
          <p>
            Yasyf and I are both very active users of call note-taking tools
            like Otter. While doing a recent deep-dive on finance automation, we
            realized that we had built up a large corpus of user interview
            transcripts, but were struggling to pattern-match across them.
            Getting answers to simple questions like "What are the most common
            metrics that customers track in their HR departments?" was taking
            hours to aggregate. To answer that question, we would need to write
            a handful of search queries, comb through transcripts to pull in
            context, copy the results into a doc, and then cobble together a
            final answer.{" "}
          </p>

          <h3 style={articleStyles.heading}>Goal</h3>
          <p>
            We set out to build a tool that could thoroughly answer questions
            about a set of uploaded transcripts. It needed to surface all
            relevant information facts across all conversations, summarize those
            results, and filter by transcript tags such as department, role, and
            company industry.
          </p>

          <h3 style={articleStyles.heading}>How We Built It</h3>
          <h4 style={articleStyles.subHeading}>
            Data Pre-processing: Extracting and Embedding the Facts
          </h4>
          <p>
            In the data pre-processing step of Summ, we begin by taking each
            transcript, which is stored as a `.txt` file. Summ supports
            generating tags based on the title and content of the transcript.
            For example, you can add tags to a transcript that specify the
            speaker's department, title, or industry. Summ supports generating
            tags from the entirety of the transcript, supporting custom rules
            and keywords.
          </p>

          <p>
            <i>Fact Extraction Instructions</i>
          </p>
          <CopyBlock
            text={fact_prompt}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            theme={anOldHope}
            wrapLines
          />

          <p>
            For each paragraph in a transcript, we convert the paragraph into a
            list of facts and update a running summary of the transcript to
            provide context for fact generation. Fact generation can be
            configured to exclude certain speakers, such as yourself.
          </p>

          <p>
            <i>Fact Extraction Example Context and Paragraph</i>
          </p>
          <CopyBlock
            text={fact_extraction_example}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>
            <i>Fact Extraction Example Generated Facts</i>
          </p>
          <CopyBlock
            text={fact_extraction_example_gen}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>
            For each extracted fact, we also determine the most likely query
            that would produce the fact. For example, the fact "The best RPA
            provider today is UiPath" would have the query "Who is the best RPA
            provider today?". Both the facts and the queries are then stored as
            embeddings in{" "}
            <a style={articleStyles.links} href="https://www.pinecone.io/">
              Pinecone
            </a>{" "}
            as a search may take the form of a question, or look more like a
            fact.{" "}
          </p>

          <p>
            For each fact embedding, the following metadata is included: fact,
            summary of surrounding paragraph, surrounding paragraph facts, and
            interviewee tags. For each query embeddings, the same metadata is
            included, with an additional pointer to the fact that this query was
            generated from.
          </p>

          <img style={articleStyles.embeds} src={preprocessing} />
          <p style={{ ...articleStyles.sidenotes, textAlign: "center" }}>
            Pre-Processing Pipeline
          </p>

          <p>
            In summary, the data pre-processing step of Summ involves extracting
            and embedding the facts from the transcripts as well as using
            user-created logic to generate transcript tags. The embeddings are
            stored in Pinecone along with associated metadata so we can search
            based on transcript tags (eg, only pull from calls with executives).{" "}
          </p>

          <h4 style={articleStyles.subHeading}>
            Inference: Recursive Summarization and "Database" Creation
          </h4>

          <p>
            For the inference step, we pick the best result of three methods.
            The first two methods use LLMs to build structured datasets,
            creating and populating a "database" with relevant metrics to answer
            a question. This structured data is then used by the LLM to run
            calculations on (eg. what percent of users report using spend
            management features). The last method uses recursive summarization,
            surfacing and summarizing to eventually answer the query.{" "}
          </p>

          <h4 style={articleStyles.boldHeading}>
            Method 1: Structured Data Generation (JSON)
          </h4>

          <p>
            With our first method, we ask GPT what kind of structured data (JSON
            format) it would need to sufficiently answer the stated question.
            For each field, it also generates a prompt that it would need to ask
            itself with each paragraph to extract the relevant metric.
          </p>

          <p>
            <i>JSON Generation Instructions</i>
          </p>
          <CopyBlock
            text={json_gen_instructions}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>
            <i>JSON Generation Example</i>
          </p>
          <CopyBlock
            text={json_gen_ex}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>
            Using the generated prompts, with each paragraph, the LLM updates
            the JSON document to include the paragraph's new information.
          </p>
          <p>
            After processing all paragraphs, we then ask the model to clean up
            the document it's collected, formatting it for use in answering the
            specific question. Finally, we use this cleaned document to generate
            an answer to the initial question.
          </p>

          <p>
            <i>Cleaned Document</i>
          </p>
          <CopyBlock
            text={json_cleaned}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>
            <i>Example Answer</i>
          </p>
          <CopyBlock
            text={example_answer}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <h4 style={articleStyles.boldHeading}>
            Method 2: Structured Data Generation (SQL)
          </h4>

          <p>
            Similarly to the first method, we use the LLM to turn the
            unstructured transcript data into structured data, this time in the
            form of a populated SQL table.
          </p>

          <p>
            We begin by asking the model to generate a SQL schema that would
            represent a table that could answer the query.
          </p>

          <p>
            <i>SQL Generation Prompt</i>
          </p>
          <CopyBlock
            text={sql_prompt}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>
            Next, we begin populating the table. For each paragraph, we
            represent the new information as a set up of updates/inserts to the
            SQL table.
          </p>

          <p>
            <i>SQL Update Prompt</i>
          </p>
          <CopyBlock
            text={sql_update_prompt}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>
            By the end of this process, we've gone from unstructured transcript
            data into structured SQL data! Finally, GPT cleans the table and
            uses it to answer the initial question.{" "}
          </p>

          <p>
            <i>Cleaned SQL Table Generated</i>
          </p>
          <CopyBlock
            text={sql_answer}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <h4 style={articleStyles.boldHeading}>
            Method 3: Recursive Summarization
          </h4>

          <p>
            For the second method, we use recursive summarization. Recursive
            summarization is necessary here due to the 8k token limit imposed by
            the OpenAI API.{" "}
          </p>

          <iframe
            title="asciinema"
            src="https://asciinema.org/a/Ys2rH36AlF7RIdzZbJiorhMcc/iframe?rows=300&preload=1"
            id="asciicast-iframe-Ys2rH36AlF7RIdzZbJiorhMcc"
            name="asciicast-iframe-Ys2rH36AlF7RIdzZbJiorhMcc"
            scrolling="no"
            allowfullscreen="true"
            style={{
              overflow: "hidden",
              margin: "0px",
              border: "0px",
              display: "inline-block",
              width: "100%",
              float: "none",
              visibility: "visible",
              height: "300px",
            }}
          ></iframe>

          <p>
            First, we determine a set of sub-questions necessary to answer the
            original question. For each of these sub-questions, we determine a
            set of queries that would render relevant facts. Next, for each
            query, we search the vector store for queries or facts that are
            similar to the embedded query. For each query nearby in vector
            space, we pull the corresponding fact. We then have a list of facts.{" "}
          </p>

          <p>
            Finally, we recursively summarize until the original question is
            answered. This involves summarizing the facts to answer the
            sub-query, summarizing the queries to answer the sub-question, and
            summarizing the sub-questions to answer the original question. The
            final summary is then returned to the user.
          </p>

          <p>The algorithm roughly works like this: </p>

          <p>
            <i>Psuedocode</i>
          </p>
          <CopyBlock
            text={get_facts_code}
            language={"python"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />
          <img style={articleStyles.embeds} src={recursiveSummarization} />
          <p style={{ ...articleStyles.sidenotes, textAlign: "center" }}>
            Recursive Summarization Algorithm
          </p>

          <p>
            Each of these computations on the way down and up uses a call to an
            LLM (in the default case, GPT-3). On the way down, we generate
            sub-questions and queries that would be necessary to answer the
            question. On the way up, we ask the LLM to summarize the results of
            those queries.
          </p>

          <p>After recursing all the way back up, we have our answer!</p>

          <h4 style={articleStyles.heading}>Final Answer Selection</h4>

          <p>
            Finally, with the answer produced from the third and final method
            complete, we ask the model to pick the best answer of the three.
          </p>

          <p>
            <i>Answer Selection Prompt</i>
          </p>
          <CopyBlock
            text={final_answer_prompt}
            language={"json"}
            customStyle={{ padding: "1em", fontSize: 12 }}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>
            We're sure there are many other amazing methods that could work for
            answering queries, these were just a few ones to start. If you have
            any ideas, feel free to play with the prompts or open a PR with a
            new method!
          </p>

          <h4 style={articleStyles.heading}>Infrastructure Used</h4>

          <p>
            We extensively used Langchain's abstractions for managing prompts —
            they were great, and the built-in LLM caching feature saved us days
            of work. It was convenient to have time-tested prompts available for
            various use cases to iterate from, and we appreciated that we were
            able to get started right away, but also that the library could
            accommodate us as our needs became more complex.
          </p>

          <p>
            We needed somewhere to store and efficiently query the embeddings,
            and we discovered Pinecone! We were ready for it to be as
            complicated as the first time we used mySQL, but it just worked.
          </p>

          <h4 style={articleStyles.heading}>Conclusion</h4>

          <p>
            Use Summ to ask questions about your transcripts! You can get
            started{" "}
            <a
              style={articleStyles.links}
              href="https://github.com/yasyf/summ/"
            >
              here
            </a>
            .
          </p>

          <p>
            To help you think about how you might use Summ, here are some
            examples of when this came in handy for our friends:
          </p>

          <p>
            <b>
              Corinne Riley at Greylock used the tool to compare products during
              due diligence.
            </b>{" "}
            As a VC diligencing a market or a specific company, she typically
            conducts numerous customer and expert calls. She uses Summ to answer
            questions like "Compare Ramp and Brex products" or "What criteria do
            customers use to evaluate Ramp and Brex?"
          </p>
          <p>
            <b>
              A friend who works in bizops suggested using Summ to inform
              messaging and strategy for top of funnel sales.
            </b>{" "}
            Transcript information can inform outbound emails, marketing on the
            website, and sales call scripts — you could ask Summ a question like
            “What are the top reasons that people are inquiring about our
            software?” or "Which competitors are our leads most concerned
            about?".
          </p>
          <p>
            <b>
              We also recommend using Summ to query voice memos of your own
              notes, thoughts, or dreams.
            </b>{" "}
            You can explore your thoughts by using queries like "What are some
            of my thoughts on rationality?" or "What are some common themes in
            my dreams?"
          </p>

          <p>
            You can install the library{" "}
            <a
              style={articleStyles.links}
              href="https://github.com/yasyf/summ/"
            >
              here
            </a>
            , and find the docs{" "}
            <a style={articleStyles.links} href="https://summ.readthedocs.io/">
              here
            </a>
            . The library is very modular so we would love to have contributors
            experiment with different prompts — there's a lot of improvement to
            be done in that area!
          </p>

          <p>
            We'd love to hear how you use this! Feel free to shoot us an email
            at me `at` markiewagner.com or{" "}
            <a href="https://twitter.com/yasyf" style={articleStyles.links}>
              @yasyf
            </a>{" "}
            on Twitter.
          </p>
        </div>
      </div>
      <div style={articleStyles.gutter}>
        {/* Any right gutter content goes here */}
      </div>
    </div>
  );
};
