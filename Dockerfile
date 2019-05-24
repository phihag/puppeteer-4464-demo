FROM debian

RUN apt-get update && \
	apt-get install -y curl libx11-xcb1 libxcomposite1 libxcursor1 libxi6 libxdamage1 libxtst6 libglib2.0-0 libnss3 libcups2 libxss1 libxrandr2 libasound2 libatk1.0-0 libatk-bridge2.0-0 libpangocairo-1.0-0 libgtk-3-0

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

WORKDIR /puppeteer-4464-demo
ADD . .
RUN npm i

CMD node demo.js
