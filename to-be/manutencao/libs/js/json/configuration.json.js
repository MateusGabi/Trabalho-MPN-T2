Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"Processo_Manutenção TO-BE","publishDate":"23/03/2016 17:05:01","pages":[{"id":"5899cfa9-db33-47b9-9f89-79d38c3c369e","name":"Diagram 1","version":"1.0","author":"201519060203","image":"files\\diagrams\\Diagram_1.png","isSubprocessPage":false,"elements":[{"id":"f54d2aec-2cd9-4afd-b0cd-657a306182c1","name":"Manutenção","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":308.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"bdcc2529-bddc-4a3a-8003-9ed530238826","name":"Solicitação de reparo","elementImage":"files\\bpmnElements\\MessageStart.png","imageBounds":{"points":[{"x":113.0,"y":84.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageStart","properties":[]},{"id":"702212ae-6229-4a57-a402-8192a14dd89c","name":"Verificar eletricista disponível","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":181.0,"y":69.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"09c374f3-0956-42fa-9ef9-b81adbde5bbb","name":"Gateway Exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":206.0,"y":185.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"disponível","elementType":"SequenceFlow","properties":[]},{"name":"não disponível","elementType":"SequenceFlow","properties":[]}]},{"id":"3207ff7c-660d-4eb4-a187-fc4a6cf4cf8d","name":"Contratar eletricista terceirizado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":181.0,"y":257.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8cb2d5d8-e3e2-4169-aff7-5f3587539675","name":"Gateway Exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":286.0,"y":267.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Informar endereço e ordem de reparo","elementType":"SequenceFlow","properties":[]}]},{"id":"17649a20-85ff-47cb-a0df-645e2b3f55fe","name":"Informar endereço e ordem de reparo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":360.0,"y":53.0}],"radius":0.0,"height":74.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a65ca03e-2bef-446a-a471-562b39db60c8","name":"Envio de informações para eletricista","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":368.0,"y":218.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"18671fb2-6025-4061-8589-a866d60eb63c","name":"Exclusive Event-based Gateway","elementImage":"files\\bpmnElements\\EventBasedGatewayExclusive.png","imageBounds":{"points":[{"x":507.0,"y":105.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"EventBasedGatewayExclusive","properties":[{"name":"Instanciar","value":"True","type":"text"}],"pageElements":[]},{"id":"a1dfe6ec-bf76-4367-a2be-788580f9cdab","name":"Problema resolvido sem necessidade de materiais","elementImage":"files\\bpmnElements\\MessageIntermediate_Catch.png","imageBounds":{"points":[{"x":603.0,"y":277.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"4abd610a-68ab-4372-a431-f91e768ecb03","name":"Nenhum","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":702.0,"y":277.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"771a86c1-cce6-42ac-bf98-61eb6b151157","name":"Materiais necessários","elementImage":"files\\bpmnElements\\MessageIntermediate_Catch.png","imageBounds":{"points":[{"x":602.0,"y":61.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"2ab88472-37f2-4a9e-a771-08becfc6bc4a","name":"Chegar disponibilidade de materiais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":683.0,"y":46.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"57ff2cd2-f563-4eca-a98c-6fe141a70691","name":"Gateway Exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":810.0,"y":56.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Materiais Disponíveis","elementType":"SequenceFlow","properties":[]},{"name":"Materiais NÃO disponíveis","elementType":"SequenceFlow","properties":[]}]},{"id":"61b5832c-7938-4c40-950d-a513a26d1d2c","name":"Solicitar materiais do fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":903.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7289b6a1-2314-43d8-bb44-de888b79ce9a","name":"Gateway Exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":928.0,"y":56.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Informar orçamento ao cliente","elementType":"SequenceFlow","properties":[]}]},{"id":"4f65e3dc-91ec-4996-aa12-8cbc42a26eb7","name":"Informar orçamento ao cliente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1007.0,"y":46.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"55f53c0f-f518-4fbf-90a7-1ed1158fb3b6","name":"Gateway Exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1153.0,"y":56.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Cliente recusou orçamento","elementType":"SequenceFlow","properties":[]},{"name":"Orçamento aceito","elementType":"SequenceFlow","properties":[]}]},{"id":"c2f454cb-c20e-4265-bf44-2a30193715d9","name":"Nenhum","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1358.0,"y":61.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"4776591f-f606-40b6-86cc-5abf0142e8c7","name":"Gerar ordem de serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1269.0,"y":161.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7b3b2900-d68f-443c-913f-0563ced13b7f","name":"Ordem de serviço ao eletricista","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":1428.0,"y":176.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd","properties":[]},{"id":"54188696-0234-4295-90e0-a574806d567c","name":"Ordem de serviço","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1202.0,"y":221.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"Estado","type":"text"}]},{"id":"89d35d2d-8c11-46e8-9dfc-86e330cf006f","name":"Loja","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":308.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]},{"id":"3dbddfd7-4fc4-4f2e-a941-70b0433c4922","name":"Process 1","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":21.0,"y":352.0}],"radius":0.0,"height":337.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"5bb29854-9cf0-4ede-9655-19ac7c380143","name":"Mensagem","elementImage":"files\\bpmnElements\\MessageStart.png","imageBounds":{"points":[{"x":140.0,"y":570.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageStart","properties":[]},{"id":"d301c4f4-8993-46d2-9e84-4d93de5bb9ec","name":"Ir até local de reparo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":110.0,"y":446.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c7d784c4-c6e8-437f-95d9-18fae8b083c0","name":"Avaliar problema e /ou materiais necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":269.0,"y":438.0}],"radius":0.0,"height":76.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1873837f-e9f6-4dee-97aa-47cae8662909","name":"Gateway Exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":434.0,"y":456.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Manutenção sem necessidade de material","elementType":"SequenceFlow","properties":[]},{"name":"Manutenção necessita de materiais","elementType":"SequenceFlow","properties":[]}]},{"id":"d9ef5b73-7326-47e5-869f-6437e0cd27b4","name":"Retornar à loja e problema resolvido na hora","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":649.0,"y":494.0}],"radius":0.0,"height":71.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"657d31c3-2cbf-4576-b44a-216663bde417","name":"Problema resolvido sem necessidade de materiais","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":793.0,"y":514.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"463d51c9-8e8a-4f15-ab78-ae38c442252a","name":"Retornar à loja e informar materiais necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":650.0,"y":379.0}],"radius":0.0,"height":70.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"68649df4-1295-4ebf-9d71-036f3972bf0d","name":"Materiais necessários","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":781.0,"y":399.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"221631ea-f5a3-4e55-80fe-7f928b15771e","name":"Eletricista","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":71.0,"y":352.0}],"radius":0.0,"height":337.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"5899cfa9-db33-47b9-9f89-79d38c3c369e","containerName":"Diagram 1","isSubprocess":false,"elements":[{"id":"f54d2aec-2cd9-4afd-b0cd-657a306182c1","value":"Manutenção"},{"id":"89d35d2d-8c11-46e8-9dfc-86e330cf006f","value":"Loja"},{"id":"54188696-0234-4295-90e0-a574806d567c","value":"Ordem de serviço"},{"id":"bdcc2529-bddc-4a3a-8003-9ed530238826","value":"Solicitação de reparo"},{"id":"702212ae-6229-4a57-a402-8192a14dd89c","value":"Verificar eletricista disponível"},{"id":"17649a20-85ff-47cb-a0df-645e2b3f55fe","value":"Informar endereço e ordem de reparo"},{"id":"18671fb2-6025-4061-8589-a866d60eb63c","value":""},{"id":"4f65e3dc-91ec-4996-aa12-8cbc42a26eb7","value":"Informar orçamento ao cliente"},{"id":"4abd610a-68ab-4372-a431-f91e768ecb03","value":""},{"id":"a1dfe6ec-bf76-4367-a2be-788580f9cdab","value":"Problema resolvido sem necessidade de materiais"},{"id":"771a86c1-cce6-42ac-bf98-61eb6b151157","value":"Materiais necessários"},{"id":"55f53c0f-f518-4fbf-90a7-1ed1158fb3b6","value":""},{"id":"c2f454cb-c20e-4265-bf44-2a30193715d9","value":""},{"id":"4776591f-f606-40b6-86cc-5abf0142e8c7","value":"Gerar ordem de serviço"},{"id":"7b3b2900-d68f-443c-913f-0563ced13b7f","value":"Ordem de serviço ao eletricista"},{"id":"a65ca03e-2bef-446a-a471-562b39db60c8","value":"Envio de informações para eletricista"},{"id":"09c374f3-0956-42fa-9ef9-b81adbde5bbb","value":""},{"id":"3207ff7c-660d-4eb4-a187-fc4a6cf4cf8d","value":"Contratar eletricista terceirizado"},{"id":"8cb2d5d8-e3e2-4169-aff7-5f3587539675","value":""},{"id":"2ab88472-37f2-4a9e-a771-08becfc6bc4a","value":"Chegar disponibilidade de materiais"},{"id":"57ff2cd2-f563-4eca-a98c-6fe141a70691","value":""},{"id":"61b5832c-7938-4c40-950d-a513a26d1d2c","value":"Solicitar materiais do fornecedor"},{"id":"7289b6a1-2314-43d8-bb44-de888b79ce9a","value":""},{"id":"fbab8119-ed98-4adf-b5f8-b3ec7c44495b"},{"id":"3dbddfd7-4fc4-4f2e-a941-70b0433c4922","value":"Process 1"},{"id":"221631ea-f5a3-4e55-80fe-7f928b15771e","value":"Eletricista"},{"id":"d9ef5b73-7326-47e5-869f-6437e0cd27b4","value":"Retornar à loja e problema resolvido na hora"},{"id":"c7d784c4-c6e8-437f-95d9-18fae8b083c0","value":"Avaliar problema e /ou materiais necessários"},{"id":"1873837f-e9f6-4dee-97aa-47cae8662909","value":""},{"id":"463d51c9-8e8a-4f15-ab78-ae38c442252a","value":"Retornar à loja e informar materiais necessários"},{"id":"d301c4f4-8993-46d2-9e84-4d93de5bb9ec","value":"Ir até local de reparo"},{"id":"68649df4-1295-4ebf-9d71-036f3972bf0d","value":"Materiais necessários"},{"id":"657d31c3-2cbf-4576-b44a-216663bde417","value":"Problema resolvido sem necessidade de materiais"},{"id":"5bb29854-9cf0-4ede-9655-19ac7c380143","value":""}]}]}