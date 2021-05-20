import ComA from "./ComA";
import ComB from "./ComB";
import ComC from "./ComC";

function Exam08Ref() {

  return (
    <div className="card">
      <div className="card-header">
        Exam08Ref
      </div>
      <div className="card-body">
        <ComA/>
        <ComB/>
        <ComC/>
      </div>
    </div>
  );
}

export default Exam08Ref;

{/* <div id="div1"></div>

var div1 = document.getElementById("div1");
div1.innerHTML = "...";

var div1 = document.querySelector("#div1");
div1.innerHTML = "...";

var div1 = $("#id");
div.html("...");
----------------------------------
<div ref={div1}></div>
const div1 = userRe(); // createRef();
div1.current.innerHTML = "..."; */}