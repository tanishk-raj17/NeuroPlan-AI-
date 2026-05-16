import "../style.css";

import Sidebar
from "../components/dashboard/Sidebar";

import Topbar
from "../components/dashboard/Topbar";

import PlannerHeader
from "../components/planner/PlannerHeader";

import AIGreeting
from "../components/planner/AIGreeting";

import TimetableCard
from "../components/planner/TimetableCard";

import AIInsights
from "../components/planner/AIInsights";

import StreakCard
from "../components/planner/StreakCard";

import HeatmapCard
from "../components/planner/HeatmapCard";

import FocusTimer
from "../components/planner/FocusTimer";

import QuickAITutor
from "../components/planner/QuickAITutor";

import WeeklyRoadmap
from "../components/planner/WeeklyRoadmap";

import RecommendationCard
from "../components/planner/RecommendationCard";

import NotificationCard
from "../components/planner/NotificationCard";

import ProgressTracker
from "../components/planner/ProgressTracker";

import SubjectTags
from "../components/planner/SubjectTags";

import BreakSuggestion
from "../components/planner/BreakSuggestion";

import SmartPriority
from "../components/planner/SmartPriority";

import AdaptiveAI
from "../components/planner/AdaptiveAI";

import DragDropTasks
from "../components/planner/DragDropTasks";

import CustomTask
from "../components/planner/CustomTask";

function StudyPlanner() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <div className="planner-page">

          <PlannerHeader />

          <AIGreeting />

          <ProgressTracker />

          <SubjectTags />

          <div className="planner-layout">

            <div className="planner-left">

              <TimetableCard />

              <WeeklyRoadmap />

              <SmartPriority />

              <DragDropTasks />

              <CustomTask />

             <RecommendationCard />

             <NotificationCard />


            </div>

            <div className="planner-right">

              <AIInsights />

              <StreakCard />

              <HeatmapCard />

              <FocusTimer />

              <QuickAITutor />

              <BreakSuggestion />

            <AdaptiveAI />

             

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default StudyPlanner;