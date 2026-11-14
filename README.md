# iRiel Personal Intelligence

Desenvolver o iRiel AppWeb vNext — Personal Intelligence Environment (PIE) criado pela Robert Software Labs, com inteligência nativa disponível desde o primeiro segundo, orbe de presença iridescente, iSpace integrado, armazenamento pessoal iVault isolado de dados de runtime, e arquitetura de experiências (Everyday, Thinking, Research, Creative, Developer, Private).

### Locked
- Seguir estritamente a identidade visual e o design system das imagens anexadas (IMG_0075.png e IMG_0071.jpeg): fundo preto OLED profundo (#000000 / #050505), estética de vidro fosco (frosted glass) com bordas sutis e tipografia limpa estilo Apple/VisionOS.
- Orbe de Presença Central ("Presence"): cápsula horizontal de vidro iridescente com feixe de luz cromática interna (conforme IMG_0071.jpeg). Deve ter estados visuais fluidos:
  1. Estado Idle/Presença: respiração luminosa suave e reflexos de vidro.
  2. Estado Listening (voz): linhas de ondas acústicas etéreas emanando horizontalmente da pílula com o texto "Listening..." e controles de áudio (microfone ativo e botão de parar em vermelho, como em IMG_0075.png).
  3. Estado Thinking/Processing: pulso cromático dinâmico no núcleo da cápsula.
  4. Estado Resposta: recolhe suavemente para o cabeçalho mantendo o feedback de presença ativo.
- Tela Inicial / Hero:
  - Título central: "Ask or Search with iRiel".
  - Barra de comando flutuante tipo pílula com botão "+" (anexos), input ("Ask or search..."), botão de microfone e seta de envio.
  - Pílulas de sugestão rápida abaixo da barra: "Summarize this for me", "Search the web", "Work with my files", "Help me plan", "Brainstorm ideas".
  - Rodapé fixo: "iRiel · Human first. Always." à esquerda e "A PRSL-AI creation" à direita.
- Topbar e Navegação:
  - Controles de janela macOS (traffic lights: vermelho, amarelo, verde) no topo esquerdo.
  - Wordmark "iRiel" elegante.
  - Controles à direita: ícone de busca rápida, botão pílula "iSpace", e avatar de perfil circular "R" (Robert).
- Dock / Barra Lateral Esquerda (recolhível):
  - Ícones e rótulos: New Chat, Search, Files, Projects, Agents, Devices, Settings.
- Interface do iSpace (ambiente pessoal integrado):
  - Cabeçalho: "iSpace - Your personal intelligence environment." com botão voltar e avatar do usuário.
  - Badge de Presença interna: mini cápsula iridescente com "iRiel · Always with you.".
  - Seções de navegação lateral: Profile, Memory, Connections, Devices, Agents, Customization, Privacy, About.
  - Painel de Perfil com dados do usuário: Name (Robert), Email (robert@prsl.ai), Timezone (Lisbon (WET)), Language (English / seletor multilíngue).
- Arquitetura de Memória e iVault:
  - Gerenciador do iVault com visualização de quota e planos (Free 16 GB, Standard 50 GB, Plus 1 TB, Advanced 2 TB).
  - Regra canônica do IRC-001 implementada: arquivos pessoais (Docs, Mídia, Projetos) usam o iVault; pesos de modelos, caches de inferência e índices vetoriais NUNCA consomem espaço do usuário.
- Seletor de Experiências (Experience Contract):
  - Experiências nativas selecionáveis: Everyday, Thinking, Research, Creative, Developer e Private.
  - Modo Private: isolamento estrito local, com badge visual explícito confirmando zero telemetria e zero chamadas externas de federação.
- Fluxo de Conversação com Cards Ricos:
  - Visualização de chat (conforme o quadrante superior direito de IMG_0075.png): cartões organizados em colunas com resumos, tópicos e badges de fontes verificadas (The Verge, OpenAI, Google DeepMind, etc.).
- Responsividade completa:
  - Desktop (1280x832), Tablet e Mobile (393x764) com navegação adaptada e presença contínua ("Presence across every device. One iRiel. Everywhere.").

### Open
- O builder decide e implementa o fluxo de dados simulados de alto nível para permitir testar todas as experiências e uploads no iVault.
- Suporte multilíngue funcional com alternância fluida entre os idiomas principais da especificação (Português, Inglês, Espanhol, Francês, Alemão, Japonês, etc.).
- Ações interativas completas para alternar entre busca web, arquivos e planejamento.

build a real working app, not a clickable prototype; the screen and kit files show layout, content and look (a wireframe's, structure only) and are never code to copy. The screens are the moments the user designed, not the whole product. Before building, walk through each flow as its user would and design what the pictures leave out, as a product designer would for this product: the steps a flow needs to finish and how the app responds to what the user does, including the moments its users will actually run into, like waiting on something or finding nothing yet. Add nothing a user of this product would never meet, and keep an app the user wants simple, simple. Never leave a step the product's core flows need as "coming soon", unless the brief says the user chose to. Where such a step needs an outside service, build every part up to it and say in your reply what's left to connect. Fill product gaps only, never a look the design set: an added step reuses the UI kit's tokens, chrome and parts and the nearest designed screen's layout, with no new visual direction. Look at every screen's picture before writing code; design.md says which picture or sheet holds each screen. Open the UI kit's shells and parts HTML for the header, tab bar, composer and components, not only its tokens. Use each finished screen's copy exactly as design.md lists it; never invent copy for one. A wireframe under design.md's Wireframes gives structure only: build it in the design's look, as design.md says. The screens' photos are placeholders for the mockups only: replace every photo design.md lists with the user's own upload for it, else as design.md says (a photo without people re-composed with imagegen--edit_image from it as a reference, a photo of people generated from its brief and never from the photo), and ship no set photo or its URL. Build and check each screen at the canvas it was drawn at: phone 393×764, tablet landscape 1133×744, tablet portrait 744×1133, desktop 1280×832. After building, screenshot the app at those sizes and states, compare each finished screen with its picture, and fix every visual difference you didn't choose; check a wireframe's screen against its structure, never its grey look. End your reply with "Changed from the mockups": each deliberate change and why, and "Added beyond the mockups": each step, state or interaction you built that no screen shows.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dc9c3852-878f-4f3a-ba48-e27b3366af5d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
