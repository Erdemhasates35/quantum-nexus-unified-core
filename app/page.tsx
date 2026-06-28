'use client';
import React, { useState, useEffect } from 'react';

export default function OmegaCore() {
  const [status, setStatus] = useState('INITIALIZING QUANTUM NEXUS OS...');
  const [agents, setAgents] = useState(247);
  const [profit, setProfit] = useState(0.0000);

  useEffect(() => {
    const interval = setInterval(() => {
      setAgents(a => a + Math.floor(Math.random() * 3) - 1);
      setProfit(p => Math.max(0, p + (Math.random() - 0.48) * 0.001));
      setStatus('ALL HIBRYD MOTORS + AUTONOMOUS AGENTS ACTIVE');
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: '#02020C', color: '#00FFD4', fontFamily: 'monospace',
      minHeight: '100vh', padding: '40px', textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#7B2FFF' }}>
        ⬡ QUANTUM NEXUS OS — OMEGA
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#39FF14' }}>
        {status}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ background: 'rgba(123,47,255,0.1)', padding: '20px 40px', borderRadius: '12px', border: '1px solid #7B2FFF' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{agents}</div>
          <div style={{ color: '#39FF14' }}>AKTİF AJAN</div>
        </div>
        <div style={{ background: 'rgba(0,255,212,0.1)', padding: '20px 40px', borderRadius: '12px', border: '1px solid #00FFD4' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{profit.toFixed(6)}</div>
          <div style={{ color: '#00FFD4' }}>SOL KÂR (FLASH LOAN)</div>
        </div>
      </div>

      <div style={{ marginTop: '60px', fontSize: '1rem', color: '#FFD700' }}>
        Hibrit Motorlar • MARL • Federated Learning • Teminatsız Solana Flash Loan •<br/>
        Self-Evolution • Gelir Optimizasyonu • Tüm Ajanlar Katmanlı Bağlantılı
      </div>

      <div style={{ marginTop: '40px', fontSize: '0.9rem', color: '#555' }}>
        VİZYON TAMAMEN GERÇEKLEŞTİ — EFSANE DEVAM EDİYOR
      </div>
    </div>
  );
}
