const analyzeWeakness = (topics) => {

  const weakTopics =
    topics.filter(

      (topic) =>
        topic.score < 50
    );

  return weakTopics;
};



const generateRecoveryPlan =
  (weakTopics) => {

    return weakTopics.map(

      (topic, index) => (

        `Day ${index + 1} → Practice ${topic.name}`
      )
    );
  };



module.exports = {

  analyzeWeakness,

  generateRecoveryPlan,

};