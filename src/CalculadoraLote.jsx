/*!
 * Calculadora de Lotes - Deriv
 * Copyright (C) 2025 Guardianfx0
 * Licenciado sob a GPL v3
 */

import { useState } from "react";
export default function CalculadoraLote() {
  const [saldo, setSaldo] = useState(100);
  const [risco, setRisco] = useState(2);
  const [stopLoss, setStopLoss] = useState(50);
  const [valorPonto, setValorPonto] = useState(1);
  const [lote, setLote] = useState(null);

  const calcularLote = () => {
    const riscoTotal = (saldo * risco) / 100;
    const loteCalculado = riscoTotal / (stopLoss * valorPonto);
    setLote(loteCalculado.toFixed(3));
  };

  return (
    <div>
      <h1>Calculadora de Lotes Deriv</h1>
      <input type="number" value={saldo} onChange={e => setSaldo(Number(e.target.value))} />
      <input type="number" value={risco} onChange={e => setRisco(Number(e.target.value))} />
      <input type="number" value={stopLoss} onChange={e => setStopLoss(Number(e.target.value))} />
      <input type="number" value={valorPonto} onChange={e => setValorPonto(Number(e.target.value))} />
      <button onClick={calcularLote}>Calcular</button>
      {lote && <p>Lote Ideal: {lote}</p>}
    </div>
  );
}
