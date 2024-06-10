# pdf2JsonV2
Project Description
The pdf2JsonV2 project is designed to convert PDF files into JSON format. This backend service is built to facilitate the extraction and structured transformation of PDF data into a machine-readable JSON format, enabling integrations and data processing tasks in various applications.

Architecture
The pdf2JsonV2 project uses a microservices architecture, with the main service focusing on the PDF-to-JSON conversion process. The project is structured to leverage Node.js with Amplication for backend generation, ensuring scalability, maintainability, and ease of integration with other services. The generated backend includes REST and GraphQL APIs for seamless interaction with the service.

Entities and API Structure
PDFDocument
Fields:
filename (SingleLineText)
content (Json)
createdAt (DateTime)
updatedAt (DateTime)
Amplication auto-generates CRUD operations for these entities through both REST and GraphQL APIs.

Installation and Setup
Clone the Repository

git clone <repository_url>
cd pdf2JsonV2
Install Dependencies

npm install
Start a Docker Container for Your Database

npm run docker:db
Initialize the Database

npm run prisma:generate
npm run db:init
Run Your Server

npm run start
Run the Admin UI

cd ../admin-ui
npm install
npm run start
