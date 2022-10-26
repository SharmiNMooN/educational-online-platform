import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <div>
      <h2 className="text-center">Most Common FAQs for courses</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What are the technology requirements to take an online course?
          </Accordion.Header>
          <Accordion.Body>
            You will need a computer, a high speed Internet connection, a newer
            version of a web browser, and access to common tools and software
            like word processors, email, etc. Some courses may have other
            software or technology requirements as well.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How do I contact my course instructor?
          </Accordion.Header>
          <Accordion.Body>
            Instructors stay in touch with their Online Learning students in a
            variety of ways, depending on the course design. Your instructor
            will explain the best way to reach him or her within the course home
            pages. You may communicate with your instructor through discussion
            groups, bulletin boards, chat rooms, assignment submissions, through
            email, or by telephone.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What do I do if I have questions about an assignment?
          </Accordion.Header>
          <Accordion.Body>
            Online learning takes place in a virtual classroom, but the skills
            used to succeed in it are very similar to those needed for an
            on-campus class. Questions about assignments or any part of the
            class should be directed to the faculty or teaching assistant by
            email or phone, or through the instructional software, Canvas.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;
