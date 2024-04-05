import { useEffect, useState } from 'react'
import { Container } from './styles'

const firstWord = {
  initialWord: 'Entrega',
  middleWord: 'no mesmo dia para algumas regiões da grande',
  finalWord: 'São Paulo.'
}

const secondWord = {
  initialWord: 'Frete grátis',
  middleWord: 'para compras acima de',
  finalWord: 'R$280,00'
}

export function Nomezinho() {
  const [initialWord, setInitialWord] = useState<string>(firstWord.initialWord)
  const [middleWord, setMiddleWord] = useState<string>(firstWord.middleWord)
  const [finalWord, setFinalWord] = useState<string>(firstWord.finalWord)


  useEffect(() => {
    const interval = setInterval(() => {
      if (initialWord === firstWord.initialWord) {
        setInitialWord(secondWord.initialWord)
        setMiddleWord(secondWord.middleWord)
        setFinalWord(secondWord.finalWord)
      } else {
        setInitialWord(firstWord.initialWord)
        setMiddleWord(firstWord.middleWord)
        setFinalWord(firstWord.finalWord)
      }
    }, 2500)
    return () => clearInterval(interval) // Limpa o intervalo quando o componente é desmontado
  }, [initialWord]) // Usando um array vazio para garantir que o useEffect seja chamado apenas uma vez

  return (
    <Container>
      <h2><span>{initialWord}</span> {middleWord} <span>{finalWord}</span></h2>
    </Container>
  )
}
