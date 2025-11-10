import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const quizQuestions = [
  {
    id: 1,
    question: 'Cili ishte udhëheqësi i Lëvizjes Nacional-Çlirimtare të Kosovës gjatë Luftës së Dytë Botërore?',
    options: ["Bajram Curri", "Isa Boletini", "Fadil Hoxha", "Adem Jashari"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: 'Në cilin vit u shpall Pavarësia e Kosovës?',
    options: ["1999", "2008", "2000", "1995"],
    correctAnswer: 1, 
  },
  {
    id: 3,
    question: 'Cili ishte kryetari i parë i Qeverisë së Përkohshme të Kosovës pas shpalljes së pavarësisë?',
    options: ["Hashim Thaçi", "Ibrahim Rugova", "Fatmir Sejdiu", "Bajram Rexhepi"],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: 'Lufta e Kosovës ndodhi midis viteve:',
    options: ["1998-1999", "1991-1995", "2000-2001", "1995-1996"],
    correctAnswer: 0, 
  },
  {
    id: 5,
    question: 'Cila është organizata ndërkombëtare që vendosi misionin paqeruajtës në Kosovë pas luftës?',
    options: ["NATO", "UNMIK", "EU", "OSBE"],
    correctAnswer: 1, 
  },

];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const question = quizQuestions[currentQuestion];

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === question.correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= quizQuestions.length) {
    const percentage = (score * 100) / quizQuestions.length;
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.scoreText}>Testi përfundoi</Text>
          <Text style={styles.resultLabel}>Rezultati yt</Text>
        <Text style={styles.percentageText}>{percentage.toFixed(0)}%</Text>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            setCurrentQuestion(0);
            setScore(0);
          }}
        >
          <Text style={styles.optionText}>Rifillo Testin</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>

      <Text style={styles.progress}>
        Pyetja {currentQuestion + 1} nga {quizQuestions.length}
      </Text>

      <Text style={styles.questionText}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#2980b9',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  progress: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 22,
    color: '#2c3e50',
    lineHeight: 30,
    marginBottom: 25,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#f39c12',
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 250,
  },
  optionText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '600',
  },
  optionsContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  resultLabel: {
    fontSize: 20,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 10,
  },
  percentageText: {
    fontSize: 40,
    color: '#f39c12',
    fontWeight: 'bold',
    marginBottom: 25,
  },
});
