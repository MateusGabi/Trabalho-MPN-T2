Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"Processo de Manutenção","publishDate":"23/03/2016 16:57:07","pages":[{"id":"5899cfa9-db33-47b9-9f89-79d38c3c369e","name":"Diagram 1","version":"1.0","author":"201519060203","image":"files\\diagrams\\Diagram_1.png","isSubprocessPage":false,"elements":[{"id":"f54d2aec-2cd9-4afd-b0cd-657a306182c1","name":"Manutenção","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":308.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"bdcc2529-bddc-4a3a-8003-9ed530238826","name":"Solicitação de reparo","elementImage":"files\\bpmnElements\\MessageStart.png","imageBounds":{"points":[{"x":132.0,"y":110.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageStart","properties":[]},{"id":"702212ae-6229-4a57-a402-8192a14dd89c","name":"Verificar eletricista disponível","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":209.0,"y":95.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"17649a20-85ff-47cb-a0df-645e2b3f55fe","name":"Informar endereço e ordem de reparo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":332.0,"y":88.0}],"radius":0.0,"height":74.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a65ca03e-2bef-446a-a471-562b39db60c8","name":"Envio de informações para eletricista","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":368.0,"y":218.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"18671fb2-6025-4061-8589-a866d60eb63c","name":"Exclusive Event-based Gateway","elementImage":"files\\bpmnElements\\EventBasedGatewayExclusive.png","imageBounds":{"points":[{"x":507.0,"y":105.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"EventBasedGatewayExclusive","properties":[{"name":"Instanciar","value":"True","type":"text"}],"pageElements":[]},{"id":"a1dfe6ec-bf76-4367-a2be-788580f9cdab","name":"Problema resolvido sem necessidade de materiais","elementImage":"files\\bpmnElements\\MessageIntermediate_Catch.png","imageBounds":{"points":[{"x":603.0,"y":277.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"4abd610a-68ab-4372-a431-f91e768ecb03","name":"Nenhum","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":702.0,"y":277.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"771a86c1-cce6-42ac-bf98-61eb6b151157","name":"Materiais necessários","elementImage":"files\\bpmnElements\\MessageIntermediate_Catch.png","imageBounds":{"points":[{"x":602.0,"y":61.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"4f65e3dc-91ec-4996-aa12-8cbc42a26eb7","name":"Informar orçamento ao cliente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":696.0,"y":46.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"55f53c0f-f518-4fbf-90a7-1ed1158fb3b6","name":"Gateway Exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":864.0,"y":56.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Cliente recusou orçamento","elementType":"SequenceFlow","properties":[]},{"name":"Orçamento aceito","elementType":"SequenceFlow","properties":[]}]},{"id":"c2f454cb-c20e-4265-bf44-2a30193715d9","name":"Nenhum","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1069.0,"y":61.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"4776591f-f606-40b6-86cc-5abf0142e8c7","name":"Gerar ordem de serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":980.0,"y":161.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7b3b2900-d68f-443c-913f-0563ced13b7f","name":"Ordem de serviço ao eletricista","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":1139.0,"y":176.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd","properties":[]},{"id":"54188696-0234-4295-90e0-a574806d567c","name":"Ordem de serviço","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":913.0,"y":221.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"Estado","type":"text"}]},{"id":"89d35d2d-8c11-46e8-9dfc-86e330cf006f","name":"Loja","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":308.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]},{"id":"3dbddfd7-4fc4-4f2e-a941-70b0433c4922","name":"Process 1","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":26.0,"y":352.0}],"radius":0.0,"height":337.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"5bb29854-9cf0-4ede-9655-19ac7c380143","name":"Mensagem","elementImage":"files\\bpmnElements\\MessageStart.png","imageBounds":{"points":[{"x":145.0,"y":570.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageStart","properties":[]},{"id":"d301c4f4-8993-46d2-9e84-4d93de5bb9ec","name":"Ir até local de reparo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":115.0,"y":446.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c7d784c4-c6e8-437f-95d9-18fae8b083c0","name":"Avaliar problema e /ou materiais necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":274.0,"y":438.0}],"radius":0.0,"height":76.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1873837f-e9f6-4dee-97aa-47cae8662909","name":"Gateway Exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":439.0,"y":456.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Manutenção sem necessidade de material","elementType":"SequenceFlow","properties":[]},{"name":"Manutenção necessita de materiais","elementType":"SequenceFlow","properties":[]}]},{"id":"d9ef5b73-7326-47e5-869f-6437e0cd27b4","name":"Retornar à loja e problema resolvido na hora","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":654.0,"y":494.0}],"radius":0.0,"height":71.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"657d31c3-2cbf-4576-b44a-216663bde417","name":"Problema resolvido sem necessidade de materiais","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":798.0,"y":514.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"fd235825-7f7f-4ccf-9eb8-4514d26061d4","name":"Finalizar ordem","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":909.0,"y":453.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c1be47ce-63b8-4db4-b0fe-b9c162bb53ed","name":"Nenhum","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1051.0,"y":468.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"463d51c9-8e8a-4f15-ab78-ae38c442252a","name":"Retornar à loja e informar materiais necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":655.0,"y":379.0}],"radius":0.0,"height":70.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"68649df4-1295-4ebf-9d71-036f3972bf0d","name":"Materiais necessários","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":786.0,"y":399.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate","properties":[]},{"id":"221631ea-f5a3-4e55-80fe-7f928b15771e","name":"Eletricista","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":76.0,"y":352.0}],"radius":0.0,"height":337.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"5899cfa9-db33-47b9-9f89-79d38c3c369e","containerName":"Diagram 1","isSubprocess":false,"elements":[{"id":"f54d2aec-2cd9-4afd-b0cd-657a306182c1","value":"Manutenção"},{"id":"89d35d2d-8c11-46e8-9dfc-86e330cf006f","value":"Loja"},{"id":"54188696-0234-4295-90e0-a574806d567c","value":"Ordem de serviço"},{"id":"bdcc2529-bddc-4a3a-8003-9ed530238826","value":"Solicitação de reparo"},{"id":"702212ae-6229-4a57-a402-8192a14dd89c","value":"Verificar eletricista disponível"},{"id":"17649a20-85ff-47cb-a0df-645e2b3f55fe","value":"Informar endereço e ordem de reparo"},{"id":"18671fb2-6025-4061-8589-a866d60eb63c","value":""},{"id":"4f65e3dc-91ec-4996-aa12-8cbc42a26eb7","value":"Informar orçamento ao cliente"},{"id":"4abd610a-68ab-4372-a431-f91e768ecb03","value":""},{"id":"a1dfe6ec-bf76-4367-a2be-788580f9cdab","value":"Problema resolvido sem necessidade de materiais"},{"id":"771a86c1-cce6-42ac-bf98-61eb6b151157","value":"Materiais necessários"},{"id":"55f53c0f-f518-4fbf-90a7-1ed1158fb3b6","value":""},{"id":"c2f454cb-c20e-4265-bf44-2a30193715d9","value":""},{"id":"4776591f-f606-40b6-86cc-5abf0142e8c7","value":"Gerar ordem de serviço"},{"id":"7b3b2900-d68f-443c-913f-0563ced13b7f","value":"Ordem de serviço ao eletricista"},{"id":"a65ca03e-2bef-446a-a471-562b39db60c8","value":"Envio de informações para eletricista"},{"id":"fbab8119-ed98-4adf-b5f8-b3ec7c44495b"},{"id":"3dbddfd7-4fc4-4f2e-a941-70b0433c4922","value":"Process 1"},{"id":"221631ea-f5a3-4e55-80fe-7f928b15771e","value":"Eletricista"},{"id":"d9ef5b73-7326-47e5-869f-6437e0cd27b4","value":"Retornar à loja e problema resolvido na hora"},{"id":"c7d784c4-c6e8-437f-95d9-18fae8b083c0","value":"Avaliar problema e /ou materiais necessários"},{"id":"1873837f-e9f6-4dee-97aa-47cae8662909","value":""},{"id":"463d51c9-8e8a-4f15-ab78-ae38c442252a","value":"Retornar à loja e informar materiais necessários"},{"id":"d301c4f4-8993-46d2-9e84-4d93de5bb9ec","value":"Ir até local de reparo"},{"id":"68649df4-1295-4ebf-9d71-036f3972bf0d","value":"Materiais necessários"},{"id":"657d31c3-2cbf-4576-b44a-216663bde417","value":"Problema resolvido sem necessidade de materiais"},{"id":"5bb29854-9cf0-4ede-9655-19ac7c380143","value":""},{"id":"c1be47ce-63b8-4db4-b0fe-b9c162bb53ed","value":""},{"id":"fd235825-7f7f-4ccf-9eb8-4514d26061d4","value":"Finalizar ordem"}]}]}