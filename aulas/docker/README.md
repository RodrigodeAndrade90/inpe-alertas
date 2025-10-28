# Aula 09 – Docker: App Node.js dockerizado

Projeto pronto para cumprir a atividade prática (instalar Docker, criar Dockerfile, executar localmente, usar Docker Compose e integrar com GitHub Actions).

## Requisitos
- Docker e Docker Compose
- Node.js (opcional para rodar fora de container)

## Como rodar
```bash
# construir imagem
docker build -t meuapp .

# executar container
docker run -p 3000:3000 meuapp

# acessar
curl http://localhost:3000
```

### Usando Docker Compose
```bash
docker compose up --build
# ou
docker-compose up --build
```

## Prints
Abra `http://localhost:3000` no navegador e tire o print. Você também pode usar:
```bash
docker ps
docker logs <ID-ou-nome>
```

## GitHub Actions (Docker build)
O workflow `./github/workflows/docker.yml` faz build da imagem em pushes/PRs.
