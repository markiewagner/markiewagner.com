import React from "react";
// Images
import caveman from "../../assets/caveman.png"
import socialGraphExample from "../../assets/social_graph_example.png";
import uscSocialGraph from "../../assets/usc_social_graph.png";
import { articleStyles } from "../../styles";

export const SocialInfra = () => {
  return (
    <div style={articleStyles.container}>
      {/* Back Button */}
      <div style={articleStyles.backButton}><a style={articleStyles.links} href={"/"}>← Home</a></div>
      <div style={articleStyles.gutter}>
        {/* Any left gutter content goes here */}
      </div>
      <div style={articleStyles.textContainer}>
        {/* Title */}
        <h1 style={articleStyles.title}>Building Modern Social Infrastructure</h1>
        {/* Subtitle */}
        <h2 style={articleStyles.subtitle}>Social atomization is the most serious public health crisis of our generation. Today we have an opportunity to reinvent our social infrastructure – the groups, institutions, norms, and rituals that unite individuals into cohesive tribes.</h2>
        {/* Author Section */}
        <div style={articleStyles.authorSection}>
          <p style={articleStyles.date}>July 22nd, 2022</p>
          <p>Markie Wagner</p>
          <hr style={articleStyles.divider} />
        </div>
        {/* Main Content */}
        <div style={articleStyles.body}>
          <p>Millions of years of lone primates getting killed before they reproduce has evolutionarily conditioned us to produce cortisol, the human stress hormone, when we do not have a social group. The need for social connection isn’t a personality type or recent cultural phenomenon — a tribe is a hard-wired evolutionary need like sex or food.</p>
          <p>Low social integration is more deadly than smoking 15 cigarettes a day, alcoholism, or obesity. Weak, sparse social graphs make us significantly more likely to experience cancer, depression, chronic inflammation, and early death — a depressing consequence considering over half of Americans sometimes or always feel alone.</p>
          <p>With churches and other historical sources of connectedness deteriorating, Americans lack access to the social infrastructure that’s required for happy and healthy living. Most adults work 9-5 surrounded by co-workers they have little in common with, spend weeknights watching Netflix alone, and only occasionally see friends for their social contact of the week, a scheduled meal or unmemorable night out.</p>
          <p>We face a stark choice: reinvent our social infrastructure or die.</p>

          <h3 style={articleStyles.heading}>Bad Social Graphs Are Killing Us</h3>
          <p>The single best determinant of long-term happiness is the density and strength of one’s social connections. Here, density means how many of your friends are friends themselves — think a close-knit friend group where everyone knows each other versus a handful of acquaintances you only see one-on-one. People with strong, rich social graphs get higher-quality sleep, age slower, and preserve their memories better.</p>
          <img style={articleStyles.embeds} src={socialGraphExample} />
          <p>Conversely, the most serious health challenge in America today isn't substance abuse or mental illness — it is perceived lack of connection. Loneliness is best understood as a chronically stressful condition where an organism permanently braces for social and physical attack. Elevated white blood cells trigger inflammation, preparing the body to heal incoming wounds; increased norepinephrine activates a sustained fight-or-flight response; the amygdala becomes hyper-sensitive to negative social experiences and stressors; the brain stays alert while asleep, resulting in poor sleep quality; increased cortisol causes chronic stress. After all, you should feel threatened and anxious — you don't have others to protect you.</p>
          <p>Poor social graphs are upstream of an array of other health issues. The physical response to a weak social web wears down the body over time — those lacking connection are far more likely to contemplate suicide and experience suppressed immune systems, depression, colds, heart attacks, hardened arteries, cancer, accelerated physiological aging, and elevated blood pressure. Longitudinal studies show that social isolation triggers damaging behaviors — loneliness causes people to smoke more, binge drink, overeat, under-exercise, and engage in other destructive behaviors more than their connected peers.</p>
          <img style={articleStyles.embeds} src={caveman} />

          <h3 style={articleStyles.heading}>How to Build Dense Social Graphs</h3>
          <p>Similarity breeds strong connections 1:1 and for groups. The "opposites attract" adage has been disproven by a body of research — people like to be friends with people like themselves. The dimensions of similarity that encourage friendship can be psychological, values-based, or derived from particular interests. Similarity governs "best friend" relationships far more than acquaintances, and the closer a member is to the edge of a group’s psychological niche, the more likely they are to leave the group.</p>
          <p>This factor is strikingly absent from modern relationships; six in ten Americans feel that their interests and ideas are not shared by those around them.</p>
          <p>People both socially cluster around shared traits1 and tighten their cluster over time by adapting their traits, values, and skills to the mean of their cluster.2 Conditional on being in a sorority, you are likely to dress better and consider yourself more attractive than the average student. Conditional on being an artist, you are likely to have higher openness and try new drugs. Though there are plentiful exceptions to general trends, traits and preferences are not independent and identically distributed. Unique circumstances can create unusual combinations of traits that are not positively correlated — that's why the probability of being charismatic conditional on being a business major is a distribution.</p>
          <p>Social foci are the key to unlocking better social graphs. Social foci are social, digital, or physical entities that drive us to engage in shared activities. Repeated interaction creates and sustains relationships – as a result, social foci are the foundation of most meaningful social connections. Examples of social foci include membership in a team, club, Greek organization, or neighborhood, or common spaces; shared classrooms, dining halls, dorm hallways, common spaces, or certain frequently visited parts of campus. </p>
          <p>One of the main reasons social foci are so important for relationship formation is that they create rich networks where everyone has mutual friends with one another. People can create one-off relationships with a little bit of charisma and courage, but only social foci can create densely connected social graphs.</p>
          <img style={articleStyles.embeds} src={uscSocialGraph} />
          <p>The university effectively discovers personality clusters and sorts students into clusters based on shared values and personality traits. People choose to participate in this sorting process, and describe it as the best four years of their lives.</p>
          <p>Beyond finding a niche, college is a uniquely powerful matchmaker: 28% of all married college graduates attended the same college as their spouse. As colleges grow weaker as social connectors and it becomes more taboo to date co-workers, the destruction of social institutions is a potential extinction-level issue. </p>

          <h3 style={articleStyles.heading}>What Happens After the Best Years of Your Life?</h3>
          <p>After leaving an educational institution and entering the workforce, most Americans will find that their social graph undergoes a dramatic change for the worse.</p>
          <p>It's not that people typically have no friends after leaving college — a handful of peers will probably end up in the same city, and some graduates will be able to build rich personal and professional networks through their field of choice. But for most, the days spent with kindred spirits in classes, dorms, and clubs will be replaced by a sterile 9-5 surrounded by co-workers with vastly different interests, personalities, and traits.</p>
          <p>Students are aware of this post-graduate lull and take desperate measures to avoid it. Many students who have no professed interest in academia will enroll in expensive Masters and PhD programs, perhaps in a bid to delay the post-educational social decline a little longer. </p>
          <p>In the Good Old Days, the degradation of social graphs was far less pronounced. The township, church, and local civic organization such as Boy Scouts and the Red Cross served as a continuous web of social foci that persisted across one's entire lifespan. As younger generations normalize moving away from home, having small families (or no family at all), and abandoning participation in civic organizations or other hobbies, most have no alternative social structures to rely on after college.</p>
          <p>Given the lack of social infrastructure after college, it makes sense that one’s social network grows monotonically weaker throughout adulthood. By mid-life, over half of Americans report that no one knows them well. The trend continues until death, with 60% of nursing home residents reporting that they do not have a single friend.</p>
          <iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~mx2flip/4.embed?show_link=false"></iframe>
          <p style={{ ...articleStyles.sidenotes, textAlign: "center" }}>A plot of the average personality of each major and Greek life organization on USC's campus.3 The average personalities were projected from 28 dimensions into 3. Dots that are closer together in 3D space are more similar, and further apart, more different. Yellow dots are art majors, blue are frats, pink are sororities 4, and other majors are various colors.5</p>
          <p>The university effectively discovers personality clusters and sorts students into clusters based on shared values and personality traits. People choose to participate in this sorting process, and describe it as the best four years of their lives.</p>
          <p>Beyond finding a niche, college is a uniquely powerful matchmaker: 28% of all married college graduates attended the same college as their spouse. As colleges grow weaker as social connectors and it becomes more taboo to date co-workers, the destruction of social institutions is a potential extinction-level issue. </p>

          <h3 style={articleStyles.heading}>The Future of Social Infrastructure</h3>
          <p>Just as Tiktok made 10x better tooling for short-form mobile video creation and birthed a new kind of creator, 10x better tooling for creating social organizations will birth a new creator specialized in cult creation. Skills include attracting a group rallied around a particular set of values or goals, creating a culturally distinct experience, helping people find their people, and building a rich social world for members. They will be masters of the tools for status legibility and norm enforcement — rituals, sermons, sacrifices, badges, leveling, reputation systems, and more.</p>
          <p>Some groups will look like team sports traversing the massively multiplayer PvP online arena, making money and solving problems. Others could be cousins of businesses, fandoms, clubs, and religions. Every group will have its own objective function for increasing status within itself  — from making good investments, to producing good writing for a publication, to being a virtuous person (whatever that means to the organization). They may serve as the basis of identity in new ways, similar to how one's alma mater is often mentioned in an introduction.</p>
          <p>With strong social infrastructure, people can move through a continuous social web of organizations, societies, and friend groups that cover all stages of life. The world looks more interesting when social networks are dense. The highest-agency organizations will quickly become countries, publications, and groups of people on a shared quest. After all, most college organizations do something – throw parties, host hackathons, launch rockets, race electric cars.</p>
          <p>As we reflect on our deathbeds, we'll have lived happier, healthier, and more meaningful lives. With proper infrastructure, social foci will naturally blossom around the activities that give people energy — perhaps one day, both the internet and real world will be happily traversed by teams of individuals undertaking quests and having fun with their friends.</p>

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
