CREATE DATABASE controle_ponto;

\c controle_ponto;

CREATE TABLE funcionarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cargo VARCHAR(255),
  funcao VARCHAR(255),
  departamento VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TYPE tipo_ponto AS ENUM ('entrada', 'saida');

CREATE TABLE pontos (
  id SERIAL PRIMARY KEY,
  funcionario_id INTEGER REFERENCES funcionarios(id),
  tipo tipo_ponto NOT NULL,
  data_hora TIMESTAMP DEFAULT NOW(),
  foto VARCHAR(255),
  assinatura VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
