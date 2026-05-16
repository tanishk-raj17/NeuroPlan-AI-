import "../style.css";

import Sidebar
from "../components/dashboard/Sidebar";

import Topbar
from "../components/dashboard/Topbar";

import TutorHeader
from "../components/aiTutor/TutorHeader";

import ChatMessages
from "../components/aiTutor/ChatMessages";

import TutorInput
from "../components/aiTutor/TutorInput";

function AITutor() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <div className="ai-tutor-page">

          <TutorHeader />

          <ChatMessages />

          <TutorInput />

        </div>

      </div>

    </div>

  );
}

export default AITutor;