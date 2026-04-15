.PHONY: deploy status open

deploy:
	git add -A
	git commit -m "deploy: atualização do site" || true
	git push

status:
	@curl -sI http://romacontabilidade.com.br | head -5

open:
	open http://romacontabilidade.com.br
