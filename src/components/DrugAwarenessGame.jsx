import { useState } from 'react'

const questions = [
  {
    statement: 'El cannabis es la droga ilegal más consumida en México.',
    answer: true,
    explanation:
      'Correcto. Según ENCODAT 2025, el 13.3% de adultos mexicanos lo ha consumido alguna vez.',
  },
  {
    statement: 'Los inhalantes son inofensivos porque no se ingieren.',
    answer: false,
    explanation:
      'Falso. Los inhalantes pueden causar muerte súbita desde el primer uso y dañan el cerebro permanentemente.',
  },
  {
    statement: 'El alcohol es la sustancia más consumida por adolescentes mexicanos.',
    answer: true,
    explanation:
      'Correcto. El 33.9% de jóvenes de 12 a 17 años ha consumido alcohol alguna vez (ENCODAT 2025).',
  },
  {
    statement: 'Puedes volverte adicto a la cocaína desde el primer consumo.',
    answer: true,
    explanation:
      'Correcto. La cocaína tiene un alto potencial adictivo desde la primera experiencia.',
  },
  {
    statement: 'El fentanilo es igual de peligroso que la heroína.',
    answer: false,
    explanation:
      'Falso. El fentanilo es hasta 100 veces más potente que la morfina y extremadamente más peligroso.',
  },
  {
    statement: 'Decir "no" a las drogas puede arruinar tu vida social.',
    answer: false,
    explanation:
      'Falso. Los verdaderos amigos respetan tus decisiones. La presión social no debe dictar tu salud.',
  },
  {
    statement:
      'La demanda de tratamiento por metanfetamina en México pasó de 9% a 51% en una década.',
    answer: true,
    explanation:
      'Correcto. Es uno de los datos más alarmantes del informe oficial de adicciones 2024.',
  },
  {
    statement: 'El consumo de drogas en adolescentes mexicanos aumentó entre 2016 y 2025.',
    answer: false,
    explanation:
      'Falso. Bajó de 6.2% a 4.1% en ese periodo, aunque el reto sigue siendo grande.',
  },
  {
    statement: 'Las drogas "naturales" como los hongos no tienen riesgos.',
    answer: false,
    explanation:
      'Falso. Toda sustancia que altera el sistema nervioso conlleva riesgos, independientemente de su origen.',
  },
  {
    statement: 'Hablar con un adulto de confianza sobre drogas puede salvarte la vida.',
    answer: true,
    explanation:
      'Correcto. Buscar ayuda a tiempo es siempre la decisión más inteligente y valiente.',
  },
]

// Static array so Tailwind scans all classes at build time — avoids dynamic class generation
const progressWidths = [
  'w-0',
  'w-[10%]',
  'w-[20%]',
  'w-[30%]',
  'w-[40%]',
  'w-[50%]',
  'w-[60%]',
  'w-[70%]',
  'w-[80%]',
  'w-[90%]',
  'w-[100%]',
]

function endMessage(score) {
  if (score <= 4) return 'Sigue aprendiendo — la información es tu mejor defensa.'
  if (score <= 7) return '¡Bien hecho! Conoces los riesgos mejor que la mayoría.'
  return '¡Excelente! Eres un referente de información sobre salud.'
}

function EndScreen({ score, onRestart }) {
  return (
    <div className="text-center py-4">
      <p className="font-body text-sm text-gray-400 mb-2 uppercase tracking-widest">
        Resultado final
      </p>
      <p className="font-display text-7xl font-black text-brand-orange mb-1">
        {score}
        <span className="text-3xl text-gray-300">/10</span>
      </p>
      <p className="font-body text-brand-dark text-base mb-8 max-w-xs mx-auto">
        {endMessage(score)}
      </p>
      <button
        onClick={onRestart}
        className="bg-brand-dark text-white font-display text-base rounded-xl px-8 py-3 hover:opacity-90 transition-opacity"
      >
        Jugar de nuevo
      </button>
    </div>
  )
}

function DrugAwarenessGame() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = questions[current]
  const answered = selected !== null
  const isCorrect = selected === q.answer

  function handleAnswer(choice) {
    if (answered) return
    setSelected(choice)
    if (choice === q.answer) setScore((s) => s + 1)
  }

  function handleNext() {
    if (current === questions.length - 1) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
    }
  }

  function handleRestart() {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  const progressIndex = finished ? 10 : current

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 max-w-xl mx-auto font-body shadow-md">
      {/* Header */}
      <h2 className="font-display text-2xl text-brand-dark text-center mb-5">
        Verdad o Mito
      </h2>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
        <div
          className={`bg-brand-orange h-2 rounded-full transition-all duration-500 ${progressWidths[progressIndex]}`}
        />
      </div>

      {finished ? (
        <EndScreen score={score} onRestart={handleRestart} />
      ) : (
        <>
          {/* Question counter */}
          <p className="font-body text-xs text-gray-400 text-center mb-3 uppercase tracking-widest">
            Pregunta {current + 1} de 10
          </p>

          {/* Question card */}
          <div className="bg-brand-light rounded-xl p-5 sm:p-6 text-center text-base sm:text-lg text-brand-dark mb-6 min-h-[90px] flex items-center justify-center">
            <span>"{q.statement}"</span>
          </div>

          {/* Answer buttons */}
          <div className="flex gap-4 mb-5">
            <button
              onClick={() => handleAnswer(true)}
              disabled={answered}
              className="flex-1 bg-brand-green text-brand-dark font-display text-lg rounded-xl py-4 disabled:opacity-50 hover:brightness-95 transition-all"
            >
              ✓ Verdad
            </button>
            <button
              onClick={() => handleAnswer(false)}
              disabled={answered}
              className="flex-1 bg-brand-orange text-white font-display text-lg rounded-xl py-4 disabled:opacity-50 hover:brightness-95 transition-all"
            >
              ✗ Mito
            </button>
          </div>

          {/* Feedback banner */}
          {answered && (
            <div
              className={`rounded-xl p-4 mb-5 ${
                isCorrect ? 'bg-green-100' : 'bg-red-200'
              }`}
            >
              <p
                className={`font-display text-base font-bold mb-1 ${
                  isCorrect ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {isCorrect ? '✓ ¡Correcto!' : '✗ Incorrecto'}
              </p>
              <p className="font-body text-sm text-brand-dark">{q.explanation}</p>
            </div>
          )}

          {/* Next button */}
          {answered && (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto sm:flex sm:mx-auto bg-brand-dark text-white font-display rounded-xl px-8 py-3 hover:opacity-90 transition-opacity text-center"
            >
              {current === questions.length - 1 ? 'Ver resultado' : 'Siguiente →'}
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default DrugAwarenessGame
