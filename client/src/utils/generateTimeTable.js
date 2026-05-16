const generateTimetable = (

  subjects,

  studyHours

) => {

  const timetable = [];



  let startHour = 8;



  subjects.forEach(

    (subject, index) => {

      timetable.push({

        time:
          `${startHour + index}:00 PM`,

        title:
          `${subject} Practice`,

        type:
          "Deep Focus",

        duration:
          "1 Hour",

      });
    }
  );



  return timetable;
};

export default
  generateTimetable;