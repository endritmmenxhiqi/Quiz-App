import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-web';

const quizQuestions =[
{
  id: 1,
  question: 'Pytja 1',
  options: [ 
    "op 1", "Op 2",
    "Op 3", "Op 4"
  ],
  correctAnswer: 0
},
{
  id: 2,
  question: 'Pytja 2',
  options: [ 
    "op 1", "Op 2",
    "Op 3", "Op 4"
  ],
  correctAnswer: 0
}
];

export default function App() {
   const [currentQuestion ,setCurrentQuestion] = useState(0);
   const[score, setScore] = useState (0);

   const question = quizQuestions[currentQuestion];

   const handleAnswer =(selectedIndex) =>{
    if(selectedIndex === question.correctAnswer){
      setScore(score +1);
    }
    setCurrentQuestion(currentQuestion +1);
   }

   const restartQuiz =() =>{
    setCurrentQuestion (0);
    setScore (0);
   }
   
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
       Quiz App
    </Text>

     <Text>
       Question  {(currentQuestion +1)} of {quizQuestions.length}
     </Text>
     <Text>
       {question.question}
     </Text>
     <Text>
      {question.options.map((option, index)=>{
        return(<Button onPress={handleAnswer}
        title={option}></Button>)
      })}
     </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  title:{
    fontSize:32,
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom:20,
    color: '#2c3e50'
  },
  progress:{
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 20
  },
  questionContainer:{
    backgroundColor: '#FFFFFF',
    padding:25,
    borderRadius: 12,
    marginBottom:20,
    shadowColor: '#000',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity: 0.1,
    shadowRadius:4,
    elevation:3,
  },
  questionText:{
    fontSize: 20,
    color: '#2c3e50',
    lineHeight:28,
  }
});
