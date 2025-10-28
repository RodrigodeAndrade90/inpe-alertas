# Aula 09 – Docker
## Como rodar
```bash
# construção da imagem
docker build -t meuapp .

# execução do container
docker run -p 3000:3000 meuapp

# acesso ao localhost
curl http://localhost:3000
```

### Docker Compose
```bash
docker compose up --build
# ou
docker-compose up --build
```

Entra no `http://localhost:3000`, e entra nesses comandos:
```bash
docker ps
docker logs <ID-ou-nome>
```

O workflow: faz build da imagem em pushes/PRs.:  `./github/workflows/docker.yml` 
