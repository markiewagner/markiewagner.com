import React from "react";
// Images
import caveman from "../../assets/caveman.png"
import socialGraphExample from "../../assets/social_graph_example.png";
import uscSocialGraph from "../../assets/usc_social_graph.png";
import { articleStyles } from "../../styles";
import {anOldHope, CopyBlock } from "react-code-blocks";


const fact_prompt = "Your task is to take the context of a conversation, and a paragraph, and extract any pertinent facts from it. \
The facts should only cover new information introduced in the paragraph. The context is only for background; do not use it to generate facts. \n \n\
You will also generate a new context, by taking the old context and modifying it if needed to account for the additional paragraph. You do not need \
to change the old context if it is suitable; simply return it again. \n \n\
\
Here is an example: \n\n \
\
Context: The conversation so far has covered the backround of the speaker. He is an RPA developer. \n \n\
\
Chunk: We had a client where they would, they had like a huge database legacy database of like their inventory \
in the store. Whenever they would whenever they would do any type of like inventory accounts, they would shut \
down for like eight hours but they wouldn't go in there and see the differences between like the database and \
it will take them 16 hours to do. Yes, insane. We built a bot that will go in there and do like we like to call \
 it, auditing and reconciliation of all the inventories, as long as they gave us like a spreadsheet, and you \
 could do it in an hour. \n \n\
\
Facts: \n \
- A client had a large legacy database for inventory in their store.  \n \
- The inventory reconciliation process would shut down the store for 8 hours.  \n \
- The process of reconciling the database would take 16 hours to complete.  \n \
- A bot was built to perform inventory auditing and reconciliation.  \n \
- The bot can complete the process in an hour as long as a spreadsheet is provided.  \n \
\
New Context: An RPA developer talks about a bot he made. The bot was created to reconcile \
a client's inventory database which used to take 16 hours to complete and shut down the store \
for 8 hours, and can now be done in an hour. \n \n\
\
------------------------------- \n \n\
Now the real one: \n \n\
\
\
Context: {{ context }} \n \n\
\
Chunk: {{ chunk }} \n \n\
\
Facts: \n\
-"

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
          <p style={articleStyles.date}>Feb 13nd, 2023</p>
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
            text={fact_prompt}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />


          <p><i>Fact Extraction Example Generated Facts</i></p>
          <CopyBlock
            text={fact_prompt}
            language={"text"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines
          />

          <p>For each extracted fact, we also determine the most likely query that would produce the fact. For example, the fact "The best RPA provider today is UiPath" would have the query "Who is the best RPA provider today?". Both the facts and the queries are then stored as embeddings in <a href="https://www.pinecone.io/">Pinecone</a> as a search may take the form of a question, or look more like a fact. </p>

          <p>For each fact embedding, the following metadata is included: fact, summary of surrounding paragraph, surrounding paragraph facts, and interviewee tags. For each query embeddings, the same metadata is included, with an additional pointer to the fact that this query was generated from.</p>

          <img style={articleStyles.embeds} src={uscSocialGraph} />
          <p style={{ ...articleStyles.sidenotes, textAlign: "center" }}>Pre-Processing Pipeline</p>

          


          {/* Endnotes */}
          <div style={articleStyles.footnotes}>
            <hr style={articleStyles.divider} />
            <p>Thanks to Ginevra Davis for feedback on this post.</p>
          </div>
        </div>
      </div>
      <div style={articleStyles.sidenoteContainer}>
        {/* Footnotes Column */}
        {/* TODO: figure out how to handle for mobile/floating sidenotes. This div hack sucks ass */}
        <div style={{ marginTop: "300vh", marginBottom: "280vh" }}>
          <div style={articleStyles.sidenotes}>1: Evidenced during a review of the MatchSC, MatchUT, MatchClaremont data (a matchmaking experiment I ran spanning 30k+ undergrads across 7 college institutions).</div>
          <div style={articleStyles.sidenotes}>2: Those who don't "fit in" are forced to work harder to find kindred spirits - long live the long tail of hyper-specific friend groups and subcultures!</div>
        </div>
        <div style={articleStyles.sidenotes}>3: This data consists of some of the most studied psychological tests such as an abridged five-factor personality test and Schwartz value survey, as well as a handful of other questions listed here.</div>
        <div style={articleStyles.sidenotes}>4: Interestingly, the "highest ranked" Greek life organizations exist at the outermost edges of the personality clusters.</div>
        <div style={articleStyles.sidenotes}>5: add sentence of what I think the PCAs could be the frat to softboi duality</div>
      </div>
      <div style={articleStyles.gutter}>
        {/* Any right gutter content goes here */}
      </div>
    </div>

  );
};
