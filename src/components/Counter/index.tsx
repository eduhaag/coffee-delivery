import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  counter: number
  incrementCounter: () => void
  decrementCounter: () => void
}

export function Counter({
  counter,
  incrementCounter,
  decrementCounter,
}: CounterProps) {
  function handleIncrementCounter() {
    incrementCounter()
  }

  function handleDecrementCounter() {
    decrementCounter()
  }

  return (
    <CounterContainer>
      <button
        onClick={handleDecrementCounter}
        type="button"
        title="reduzir uma unidade"
      >
        <Minus size={14} />
      </button>
      <span>{counter}</span>
      <button
        onClick={handleIncrementCounter}
        type="button"
        title="aumentar uma unidade"
      >
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
