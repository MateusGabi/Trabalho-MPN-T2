Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"processo_vendasToBe","publishDate":"22/03/2016 21:23:09","pages":[{"id":"ac86862c-5f8e-452c-9e9d-9e15aedbe92c","name":"Diagrama 1","version":"1.0","author":"conta","image":"files\\diagrams\\Diagrama_1.png","isSubprocessPage":false,"elements":[{"id":"bc9cfb53-8e1b-4306-9e65-7b4e6f06aa83","name":"to-be process vendas","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":550.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"ca3f916e-def4-4fca-ba60-4c9622d6f1c2","name":"Nenhum","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":162.0,"y":95.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"9634101c-dc1e-4fe0-b524-46e9cb6d6739","name":"informa o produto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":232.0,"y":80.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"186c07e1-ccdf-464f-b7df-f4aa8a845d8a","name":"      verificar disponibilidade","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":187.5,"y":277.0}],"radius":0.0,"height":60.0,"width":179.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"0e341789-273c-4d46-a67f-8426736f0b9c","name":"informa preço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":521.0,"y":277.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0bf7d5de-0e07-44bb-bbba-2a4bbb941548","name":"adquirir dados pessoais do cliente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":739.0,"y":277.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"00b43dad-d8da-4658-9d62-788eb207a128","name":"anunciar forma de pagamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":739.0,"y":73.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6bb9fc63-ea54-4a2a-8897-0b088e9eb96a","name":"informar melhro forma de pagamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":932.0,"y":73.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6c284974-09e3-4fd3-86c5-9adbd5ee4429","name":"preparar retirada","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":932.0,"y":274.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5e2ca23c-1187-41e5-8dfb-b91330c3aea8","name":"gerar ordem de serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1155.0,"y":274.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bbae57fe-5831-43bd-9f3a-d3cbbbaa1904","name":"entregar comprovante para o cliente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1294.0,"y":274.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"89c182f6-128f-42f0-a966-0a9ac8076a9f","name":"Mensagem","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":1324.0,"y":114.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd","properties":[]},{"id":"ddf59310-e8ef-4e20-8f22-c40a7e4c35da","name":"Término","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1418.0,"y":289.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd","properties":[]},{"id":"964677f8-ab8c-4f68-a779-33f0eca69c01","name":"Dados Object","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1062.0,"y":395.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"Estado","type":"text"}]},{"id":"7c9f7a3a-d7d0-4c57-98a4-79db50bf3d79","name":"cliente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"8450160d-8b90-422a-b327-1318b0150696","name":"funcionario","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":220.0}],"radius":0.0,"height":350.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}],"subPages":[]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"ac86862c-5f8e-452c-9e9d-9e15aedbe92c","containerName":"Diagrama 1","isSubprocess":false,"elements":[{"id":"bc9cfb53-8e1b-4306-9e65-7b4e6f06aa83","value":"to-be process vendas"},{"id":"7c9f7a3a-d7d0-4c57-98a4-79db50bf3d79","value":"cliente"},{"id":"8450160d-8b90-422a-b327-1318b0150696","value":"funcionario"},{"id":"964677f8-ab8c-4f68-a779-33f0eca69c01","value":""},{"id":"ca3f916e-def4-4fca-ba60-4c9622d6f1c2","value":""},{"id":"9634101c-dc1e-4fe0-b524-46e9cb6d6739","value":"informa o produto"},{"id":"186c07e1-ccdf-464f-b7df-f4aa8a845d8a","value":"      verificar disponibilidade"},{"id":"0e341789-273c-4d46-a67f-8426736f0b9c","value":"informa preço"},{"id":"0bf7d5de-0e07-44bb-bbba-2a4bbb941548","value":"adquirir dados pessoais do cliente"},{"id":"00b43dad-d8da-4658-9d62-788eb207a128","value":"anunciar forma de pagamento"},{"id":"6bb9fc63-ea54-4a2a-8897-0b088e9eb96a","value":"informar melhro forma de pagamento"},{"id":"6c284974-09e3-4fd3-86c5-9adbd5ee4429","value":"preparar retirada"},{"id":"5e2ca23c-1187-41e5-8dfb-b91330c3aea8","value":"gerar ordem de serviço"},{"id":"bbae57fe-5831-43bd-9f3a-d3cbbbaa1904","value":"entregar comprovante para o cliente"},{"id":"89c182f6-128f-42f0-a966-0a9ac8076a9f","value":""},{"id":"ddf59310-e8ef-4e20-8f22-c40a7e4c35da","value":""},{"id":"40891f83-5c51-4414-b8dd-f4575f957aaf"}]},{"containerId":"186c07e1-ccdf-464f-b7df-f4aa8a845d8a","containerName":"      verificar disponibilidade","isSubprocess":true,"elements":[{"id":"5e5d96f7-7f5f-40b9-b5b3-210966efc1af","value":""},{"id":"1e706f41-81ef-4f2c-b740-90b600b49968","value":"iniciar sistema de gerenciamento de estoque"},{"id":"51aeabdd-2f6f-4568-8fd0-5261390370e6","value":"verificar produto solicitado"},{"id":"fd2ec734-aa59-46bf-8714-3971e2c07d89","value":""},{"id":"7a655f07-037a-469e-9904-40ffc20b5627","value":"produto encontrado"},{"id":"494b4317-7bf0-4ecf-8894-3d7525ce9f21","value":"solicitar ao fornecedor"},{"id":"84c6116a-c8b6-4b6f-be97-6e5ad1ffc200","value":""},{"id":"6ce80182-8356-4484-b2d7-90535fdccdb1","value":""}]}]}