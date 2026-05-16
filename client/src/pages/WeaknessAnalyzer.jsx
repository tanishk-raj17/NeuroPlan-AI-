import "../style.css";

import Sidebar
from "../components/dashboard/Sidebar";

import Topbar
from "../components/dashboard/Topbar";

import WeaknessHeader
from "../components/weakness/WeaknessHeader";

import WeaknessCard
from "../components/weakness/WeaknessCard";

import AIWeaknessAnalysis
from "../components/weakness/AIWeaknessAnalysis";

import RecommendedFixes
from "../components/weakness/RecommendedFixes";

import WeaknessHeatmap
from "../components/weakness/WeaknessHeatmap";

import RecoveryTracker
from "../components/weakness/RecoveryTracker";

import RecoveryPlan
from "../components/weakness/RecoveryPlan";

import ConfidenceScore
from "../components/weakness/ConfidenceScore";

import FocusScore
from "../components/weakness/FocusScore";

import WeaknessAlerts
from "../components/weakness/WeaknessAlerts";

import WeaknessGrid
from "../components/weakness/WeaknessGrid";

import WeaknessProgress
from "../components/weakness/WeaknessProgress";

function WeaknessAnalyzer() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <div className="weakness-page">

          <WeaknessHeader />

          <WeaknessCard />

          <WeaknessGrid />

          <div className="weakness-layout">

            <div className="weakness-left">

              <AIWeaknessAnalysis />

              <WeaknessHeatmap />

              <RecoveryPlan />

              <WeaknessProgress />

            </div>

            <div className="weakness-right">

              <RecommendedFixes />

              <RecoveryTracker />

              <ConfidenceScore />

              <FocusScore />

              <WeaknessAlerts />

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default WeaknessAnalyzer;