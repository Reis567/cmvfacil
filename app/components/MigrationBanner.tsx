"use client";

import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ *
 *  AVISO DE MIGRAÇÃO — edite a mensagem e o link aqui embaixo.
 *  Barra fixa no rodapé (não atrapalha o topo do app). Dispensável,
 *  mas reaparece a cada nova sessão até o cliente migrar.
 * ------------------------------------------------------------------ */
const LINK_NOVO = "https://cmv.bugarintec.com.br";
const TITULO = "O novo CMV Fácil já está no ar";
const MENSAGEM =
  "A partir de 10/11 começamos a desativar esta versão antiga. Migre agora para o novo sistema: acesse e, na primeira vez, entre com o seu e-mail e clique em “Esqueci minha senha” para criar o acesso.";
const CHAVE = "aviso_migracao_dispensado_v1"; // troque p/ _v2 se quiser reexibir a todos

export default function MigrationBanner() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(CHAVE) !== "1") setMostrar(true);
    } catch {
      setMostrar(true);
    }
  }, []);

  if (!mostrar) return null;

  const dispensar = () => {
    try {
      sessionStorage.setItem(CHAVE, "1");
    } catch {}
    setMostrar(false);
  };

  return (
    <div
      role="region"
      aria-label="Aviso de migração"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2147483000,
        background: "#05322a",
        color: "#fff",
        borderTop: "3px solid #0ab86d",
        boxShadow: "0 -6px 24px rgba(0,0,0,.25)",
        padding:
          "12px max(16px, env(safe-area-inset-left)) calc(12px + env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-right))",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 22, lineHeight: 1 }} aria-hidden="true">
          🚀
        </span>
        <div style={{ flex: "1 1 240px", minWidth: 0 }}>
          <strong style={{ fontSize: 14.5, display: "block" }}>{TITULO}</strong>
          <span style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.4 }}>{MENSAGEM}</span>
        </div>
        <a
          href={LINK_NOVO}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: "0 0 auto",
            background: "#0ab86d",
            color: "#04241d",
            fontWeight: 700,
            fontSize: 13.5,
            textDecoration: "none",
            padding: "9px 16px",
            borderRadius: 9,
            whiteSpace: "nowrap",
          }}
        >
          Acessar o novo sistema →
        </a>
        <button
          onClick={dispensar}
          aria-label="Dispensar aviso"
          style={{
            flex: "0 0 auto",
            background: "transparent",
            color: "#9fd8c4",
            border: "0",
            fontSize: 20,
            cursor: "pointer",
            lineHeight: 1,
            padding: "4px 6px",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
