const quizData = [
    {
      question: "O que é reciclagem?",
      answers: {
        a: "Processo de reutilizar materiais descartados.",
        b: "Queimar lixo para reduzir volume.",
        c: "Descarte de lixo em aterros sanitários."
      },
      correct: "a"
    },
    {
      question: "Qual cor da lixeira é usada para plástico?",
      answers: {
        a: "Azul",
        b: "Vermelho",
        c: "Amarelo"
      },
      correct: "b"
    },
    {
      question: "Qual é o símbolo universal da reciclagem?",
      answers: {
        a: "Um triângulo de setas.",
        b: "Um círculo verde.",
        c: "Uma árvore."
      },
      correct: "a"
    },
    {
      question: "Qual material não pode ser reciclado?",
      answers: {
        a: "Vidro",
        b: "Plástico",
        c: "Papel sujo de gordura"
      },
      correct: "c"
    },
    {
      question: "O que significa 'reduzir' na reciclagem?",
      answers: {
        a: "Usar menos recursos.",
        b: "Transformar lixo em novos produtos.",
        c: "Separar os resíduos corretamente."
      },
      correct: "a"
    },
    {
      question: "Qual o impacto positivo da reciclagem?",
      answers: {
        a: "Reduzir o consumo de energia.",
        b: "Aumentar os aterros sanitários.",
        c: "Produzir mais resíduos."
      },
      correct: "a"
    },
    {
      question: "Qual lixeira é usada para vidro?",
      answers: {
        a: "Verde",
        b: "Vermelho",
        c: "Amarelo"
      },
      correct: "a"
    },
    {
      question: "O alumínio pode ser reciclado quantas vezes?",
      answers: {
        a: "Somente uma vez.",
        b: "Até cinco vezes.",
        c: "Infinitamente."
      },
      correct: "c"
    },
    {
      question: "Por que separar o lixo reciclável?",
      answers: {
        a: "Facilita a reciclagem.",
        b: "Evita que o lixo seja recolhido.",
        c: "É obrigatório por lei."
      },
      correct: "a"
    },
    {
      question: "Qual destes é um benefício direto da reciclagem?",
      answers: {
        a: "Redução de poluição.",
        b: "Aumento de produção industrial.",
        c: "Maior consumo de recursos naturais."
      },
      correct: "a"
    }
  ];
  
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit");
  
  function loadQuiz() {
    const output = quizData.map((question, index) => {
      const answers = Object.keys(question.answers)
        .map(
          key =>
            `<label>
              <input type="radio" name="question${index}" value="${key}">
              ${key}: ${question.answers[key]}
            </label>`
        )
        .join("");
      return `<div class="question">
                <h3>${question.question}</h3>
                <div class="answers">${answers}</div>
              </div>`;
    });
  
    quizContainer.innerHTML = output.join("");
  }
  
  function showResults() {
    let score = 0;
  
    quizData.forEach((question, index) => {
      const selected = document.querySelector(
        `input[name=question${index}]:checked`
      );
      if (selected && selected.value === question.correct) {
        score++;
      }
    });
  
    resultContainer.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas!`;
  }
  
  loadQuiz();
  
  submitButton.addEventListener("click", showResults);
  