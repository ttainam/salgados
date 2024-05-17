document.addEventListener('DOMContentLoaded', () => {

  var targetDateGMT = new Date('2024-05-31T00:00:00Z');
  var currentDateGMT = new Date();
  var timeDifference = currentDateGMT.getTimezoneOffset() * 60 * 1000;
  var targetDateAdjusted = new Date(targetDateGMT.getTime() + timeDifference);
  var twoDaysFromNow = (targetDateAdjusted.getTime() / 1000) + (86400);

  var flipdown = new FlipDown(twoDaysFromNow)
    .start()
    .ifEnded(() => {
      console.log('O contador chegou ao fim!');
    });

  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);

  const dados = {
    pedido: {
        itens: [
            {
                quantidade: 15,
                valorUnitario: 1.75,
                valorTotal: 26.25,
                nomeCliente: "",
                descricao: "",
                valorDesconto: 0,
                produto: {
                    id: 47690,
                    advertencia: "",
                    ativo: true,
                    codigoExterno: "2139696",
                    complementos: [],
                    createdAt: "2022-11-16T12:02:46.914",
                    descricao: "tamanho festa , quantidade mínima 15 uni.",
                    fichaTecnica: "",
                    grupoProduto: {
                        id: 7275,
                        ativo: true,
                        createdAt: "2022-11-16T12:00:43.272",
                        descricao: "MINI PIZZAS",
                        ordem: 0,
                        pausado: false,
                        tipoGrupoProduto: {
                            id: 2,
                            ativo: true,
                            descricao: "Pizzas",
                            imagem: "IconPizza.svg"
                        },
                        updatedAt: "2022-12-12T14:37:28.696"
                    },
                    imagens: [
                        {
                            id: 21544,
                            produto: { id: 47690 },
                            ativo: true,
                            createdAt: "2023-01-26T06:38:53.977",
                            ordem: 1,
                            publicId: "qrpedir/produtos/1497/wPNksjAC9wXKiq5o1gEtea.jpeg",
                            thumbnailUrl: "https://img.imageboss.me/parseint/cover:inside/60x90/qrpedir/produtos/1497/wPNksjAC9wXKiq5o1gEtea.jpeg",
                            updatedAt: "2023-01-26T06:38:53.978",
                            url: "https://img.imageboss.me/parseint/cdn/"
                        },
                        {
                            id: 21545,
                            produto: { id: 47690 },
                            ativo: true,
                            createdAt: "2023-01-26T06:39:14.218",
                            ordem: 2,
                            publicId: "qrpedir/produtos/1497/09fd79fd-24ee-4de9-83c2-674925148d9f.jpeg",
                            thumbnailUrl: "https://img.imageboss.me/parseint/cover:inside/60x90/qrpedir/produtos/1497/09fd79fd-24ee-4de9-83c2-674925148d9f.jpeg",
                            updatedAt: "2023-01-26T06:39:14.218",
                            url: "https://img.imageboss.me/parseint/cdn/"
                        }
                    ],
                    localImpressao: "CAIXA",
                    localVenda: "TODOS",
                    nome: "MINI PIZZA CALABRESA",
                    ordem: 100,
                    pausado: false,
                    preco: 1.75,
                    updatedAt: "2023-03-09T18:36:08.826"
                },
                ordem: 0,
                subItens: [],
                addAt: 1694436094265,
                uuid: "3.092f.eab15.c6b38d.1b006c3.e444b67b.70a6112e.1321190f83.58728c77e6-b.05fe209d5a2e.5f00f80512f49.bc381fcd8ad72.c31d98404418-49.c562477485ff6.ab457b5a7e4a2.61cb5a1fd7a1-a1.4d833342a9c29.a5a9e4ca6f96d.80dccad1e4d6-f.724af6ae7b922.dd54005f868d3.f4185cb600fab.0212d456bc399.04aa83e548e53.b25bc369c52bb.cd6b42f73eb3a.c113257c4f332.03ca861f64cae.0b7dcd93401e9.32378a750d8c6.4207a2f69cf7"
            },
            {
                quantidade: 20,
                valorUnitario: 1.15,
                valorTotal: 23,
                nomeCliente: "",
                descricao: "",
                valorDesconto: 0,
                produto: {
                    id: 47703,
                    advertencia: "",
                    ativo: true,
                    codigoExterno: "2138507",
                    complementos: [],
                    createdAt: "2022-11-16T12:06:54.72",
                    descricao: "tamanho festa , quantidade mínima 5 uni.",
                    fichaTecnica: "",
                    grupoProduto: {
                        id: 7276,
                        ativo: true,
                        createdAt: "2022-11-16T12:00:54.555",
                        descricao: "SALGADOS",
                        ordem: 0,
                        pausado: false,
                        tipoGrupoProduto: {
                            id: 7,
                            ativo: true,
                            descricao: "Salgados",
                            imagem: "IconCroasant.svg"
                        },
                        updatedAt: "2022-11-16T12:00:54.555"
                    },
                    imagens: [
                        {
                            id: 21552,
                            produto: { id: 47703 },
                            ativo: true,
                            createdAt: "2023-01-26T06:41:40.537",
                            ordem: 1,
                            publicId: "qrpedir/produtos/1497/aVHyWo2seYmoKx9nZHVT2i.jpeg",
                            thumbnailUrl: "https://img.imageboss.me/parseint/cover:inside/60x90/qrpedir/produtos/1497/aVHyWo2seYmoKx9nZHVT2i.jpeg",
                            updatedAt: "2023-01-26T06:41:40.537",
                            url: "https://img.imageboss.me/parseint/cdn/"
                        },
                        {
                            id: 21553,
                            produto: { id: 47703 },
                            ativo: true,
                            createdAt: "2023-01-26T06:41:47.871",
                            ordem: 2,
                            publicId: "qrpedir/produtos/1497/78a44b26-9513-49a2-08a0-25b16b8dbb74.jpeg",
                            thumbnailUrl: "https://img.imageboss.me/parseint/cover:inside/60x90/qrpedir/produtos/1497/78a44b26-9513-49a2-08a0-25b16b8dbb74.jpeg",
                            updatedAt: "2023-01-26T06:41:47.871",
                            url: "https://img.imageboss.me/parseint/cdn/"
                        }
                    ],
                    localImpressao: "CAIXA",
                    localVenda: "TODOS",
                    nome: "COXINHA DE FRANGO",
                    ordem: 100,
                    pausado: false,
                    preco: 1.15,
                    updatedAt: "2023-03-09T18:39:13.016"
                },
                ordem: 1,
                subItens: [],
                addAt: 1694436154159,
                uuid: "5.d350.a12bf.ef4ba1.719dbcd.55387598.c16c55cc3.fe94a2d59d.c6b87df28a-5.31a082131282.9f2668d073dcc.573d95f377558.510c13322e11-49.7e7cd4f099a6c.28bc9a0f9990.bc10cbd5a45a-b2.a015f2adb99e4.e26b5a114ca5e.356850ee2bb-5.cde05e35cc798.6806e7211629c.f0bfe2aabf16d.4ee693acbbb28.1c347344dbbc4.f1b42346c8d1a.e94b2467f11cd.557d32c5f386a.400ddbf87021.1d434c10605ac.ca692f2e442c4.27ad73e103f"
            },
            {
                quantidade: 20,
                valorUnitario: 1.15,
                valorTotal: 23,
                nomeCliente: "",
                descricao: "",
                valorDesconto: 0,
                produto: {
                    id: 47708,
                    advertencia: "",
                    ativo: true,
                    codigoExterno: "2138512",
                    complementos: [],
                    createdAt: "2022-11-16T12:08:38.479",
                    descricao: "tamanho festa , quantidade mínima 5 uni.",
                    fichaTecnica: "",
                    grupoProduto: {
                        id: 7276,
                        ativo: true,
                        createdAt: "2022-11-16T12:00:54.555",
                        descricao: "SALGADOS",
                        ordem: 0,
                        pausado: false,
                        tipoGrupoProduto: {
                            id: 7,
                            ativo: true,
                            descricao: "Salgados",
                            imagem: "IconCroasant.svg"
                        },
                        updatedAt: "2022-11-16T12:00:54.555"
                    },
                    imagens: [
                        {
                            id: 21556,
                            produto: { id: 47708 },
                            ativo: true,
                            createdAt: "2023-01-26T06:43:37.452",
                            ordem: 1,
                            publicId: "qrpedir/produtos/1497/83a8ed7b-9111-4c47-1b77-56203d130bd3.jpeg",
                            thumbnailUrl: "https://img.imageboss.me/parseint/cover:inside/60x90/qrpedir/produtos/1497/83a8ed7b-9111-4c47-1b77-56203d130bd3.jpeg",
                            updatedAt: "2023-01-26T06:43:37.452",
                            url: "https://img.imageboss.me/parseint/cdn/"
                        },
                        {
                            id: 21557,
                            produto: { id: 47708 },
                            ativo: true,
                            createdAt: "2023-01-26T06:43:43.318",
                            ordem: 2,
                            publicId: "qrpedir/produtos/1497/cd997e70-3295-4372-202d-1b118a188be0.jpeg",
                            thumbnailUrl: "https://img.imageboss.me/parseint/cover:inside/60x90/qrpedir/produtos/1497/cd997e70-3295-4372-202d-1b118a188be0.jpeg",
                            updatedAt: "2023-01-26T06:43:43.318",
                            url: "https://img.imageboss.me/parseint/cdn/"
                        }
                    ],
                    localImpressao: "CAIXA",
                    localVenda: "TODOS",
                    nome: "ESFIHA DE FRANGO",
                    ordem: 100,
                    pausado: false,
                    preco: 1.15,
                    updatedAt: "2023-03-09T18:41:57.321"
                },
                ordem: 2,
                subItens: [],
                addAt: 1694436177380,
                uuid: "4.211f.4ac15.c6b38d.1b006c3.e444b67b.70a6112e.1321190f83.58728c77e6-b.05fe209d5a2e.5f00f80512f49.bc381fcd8ad72.c31d98404418-49.c562477485ff6.ab457b5a7e4a2.61cb5a1fd7a1-a1.4d833342a9c29.a5a9e4ca6f96d.80dccad1e4d6-f.724af6ae7b922.dd54005f868d3.f4185cb600fab.0212d456bc399.04aa83e548e53.b25bc369c52bb.cd6b42f73eb3a.c113257c4f332.03ca861f64cae.0b7dcd93401e9.32378a750d8c6.4207a2f69cf7"
            }
        ]
    },
    "createdAt":"2024-05-15T14:04:02.975Z",
    "valorTotalPedido":72.25
  };

  const toke = 

  document.getElementById('meuBotao').addEventListener('click', function(event) {
    event.preventDefault();
    var newTab = window.open("https://deliciasdagrazzi.qrpedir.com/","_blank")
    console.log(newTab.localStorage, window.localStorage);
    console.log('12312312312');
    newTab.onload = function() {
      console.log('teste');
      newTab.localStorage.setItem('_cart', JSON.stringify(dados));
      newTab.localStorage.setItem('id_token', JSON.stringify({"ultimaLeituraQRCode":"2024-05-17T20:20:09.523Z"}));
      newTab.localStorage.setItem('_configuracoes', 'deliciasdagrazzi');  
      newTab.localStorage.setItem('_statusLoja', 'ABERTO'); 
      newTab.localStorage.setItem('_DISPOSITIVO', 'OSLinux_Vx86_64_VENDnone_MODELnone_1715977209538');
      newTab.localStorage.setItem('_profile', JSON.stringify({"@type":"identificador","id":58883,"ativo":true,"createdAt":"2022-11-09T14:34:15.728","empresa":{"id":1497,"ativo":true,"bairro":"Centro","cep":"89801-162","complemento":"até 109/110","configuracaoAberturaComanda":"AUTOMATICO","configuracaoAberturaDelivery":"AUTOMATICO","configuracaoEntrega":"QUILOMETRAGEM","cpfCnpj":"05.571.897/0001-27","createdAt":"2022-11-09T14:34:15.722","descricaoDelivery":"","endereco":"Rua Borges de Medeiros - D","estado":{"id":51,"codigoIbge":42,"nome":"Santa Catarina","sigla":"SC"},"foneWhatsapp":"49988148554","formaRetirada":"[\"L\",\"D\"]","idPais":1058,"modoConfirmacao":"CONFIRMAR_AO_IMPRIMIR","moeda":"REAL","mostrarLoja":"NAO","municipio":{"id":4339,"codigoIbge":4204202,"estado":{"id":51,"codigoIbge":42,"nome":"Santa Catarina","sigla":"SC"},"nome":"Chapecó","nomeComEstado":"Chapecó - SC"},"nome":"DELICIAS DA GRAZZI","numero":"48","representante":"PARSEINT DESENVOLVIMENTO DE SISTEMAS","statusHook":"ATIVO","telefoneMesa":false,"tema":"{\"primary\":\"#ef9a40\",\"secondary\":\"#f57c00\",\"background\":\"\"}","tempoMaxPreparo":90,"tempoMinPreparo":45,"tempoRetirada":45,"timezone":"-03:00","tipoConta":"","updatedAt":"2024-04-05T14:51:53.676","urlHook":"https://sistema.sischef.com/api-v2/webhook/integracao/QR","uuid":"57d880f9-b885-4772-9cbc-001973e5a9eb"},"identificadorComMascara":"0000000001","numero":"1","tipo":"DELIVERY","updatedAt":"2022-11-09T14:34:39.433","uuid":"deliciasdagrazzi"}));
    };
  });
});

