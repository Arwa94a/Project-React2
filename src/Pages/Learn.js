import coding from "../Images/coding.png"
import project from "../Images/project.png"
import computer from "../Images/computer.png"
import communities from "../Images/communities.png"
import read from "../Images/read.png"
import youtube from "../Images/youtube.png"
import bootcamp from "../Images/bootcamp.png"
import { Col, Row } from "react-bootstrap"
function Learn() {
    return (<>
    <img src={coding} centerd/>
    <h1 class="text-center">How To Start Coding</h1>
    <p class=" text-center">While anybody can learn how to start coding, many people don’t take the plunge because they’re worried they need a computer-science degree, they’re too young, they’re “not good at math” or that there are already enough programmers.

Nothing could be farther from the truth. Programming is about solving problems. Yes, it can take some time to get to grips with specific languages, but there are plenty of resources for every kind of learning style. 

Here are the essentials on how to start coding on your own.</p>
    
<Row class="d-flex  align-items-center " className="g-4">
    <Col >
<img src={project} width={300}/>
    <h3 class=" text-center">Come up with a simple project</h3>
    <p class=" text-center">You can’t learn carpentry without making a few cupboards. Likewise, when you’re learning to code, the best practice is making programs. Without that clear project, it’s easy to lose focus and motivation. So come up with an idea, and work toward that goal.

Try and keep the project simple. For example, make your life easier with a budget calculator or try building an old classic like Hangman.

We can’t stress how important this is. So before you dive into choosing a language or reading a book, come up with an idea. Got one? Great. Let’s continue.</p>
</Col>
<Col>
    <img src={computer}height={300} width={300}/>
    <h3>Get the software you’ll need</h3>
    <p>You don’t need much to start writing code. It’s making sure your computer knows how to run it that sometimes needs a little setup. So, if you’re completely new to programming, there are a few things you need to know.</p>
</Col>
    </Row>
    <Row class="d-flex  align-items-center  g-4" className="g-4">
    <Col>
    <img src={communities}height={300} width={300}/>
    <h3 class=" text-center">Join communities about how to start coding</h3>
    <p class=" text-center">Now you know the basics, it’s time to get into the details. There are plenty of places online to ask questions, get help with sticky problems and learn best practices. Joining a community can really help encourage you to continue, and give you a bit of direction when you feel lost.</p>
    </Col>
    <Col>
    <img src={read}height={300}width={300}/>
    <h3 class=" text-center">Read a few books</h3>
    <p class=" text-center">There are loads of books out there on how to start coding. Reading a book can really help you get to grips with the programming theory. The main downside is that if you get stuck, it’s hard to ask a book for help. They’re great for the broad ideas and concepts, or learning while you’re away from the computer. But without constant practice, you might become disheartened.</p>
    </Col>
    </Row>
    <Row class="d-flex  align-items-center text-center " className="g-4">
        <Col>
    <img src={youtube}height={300} width={300}/>
    <h3 class=" text-center">How to start coding with YouTube
</h3>
    <p class=" text-center">When it comes to how to start coding on your own, there are quite a few tutorials on YouTube. These can often be more entertaining than reading a book, but are usually a bit more top level. Here are a couple of good places to start.</p>

</Col>
<Col>
    <img src={bootcamp}height={300} width={300}/>
    <h3 class=" text-center">Take a Coding Bootcamp
</h3>
    <p class=" text-center">When it comes to how to start coding, nothing can beat an actual teacher. In a coding bootcamp, you’ll be put in an immersive learning environment that takes you from coding pupil to self-sufficient programmer in 14 weeks. 

Not designed for anyone who wants to dabble in programming, coding bootcamps are built for people who have decided that they want to make tech a career and want to gain the essential hard skills to be hired for jobs like full-stack developer software engineer ASAP.</p>
</Col>
</Row>

    </>  );
}

export default Learn;