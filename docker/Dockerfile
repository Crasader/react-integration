FROM ubuntu:16.04

RUN apt-get -y --fix-missing update
# Install apache, PHP, and supplimentary programs, openssh-server, curl, and lynx-cur
RUN apt-get -y --force-yes install software-properties-common python-software-properties

RUN LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php

RUN apt-get -y --fix-missing update
RUN apt-cache pkgnames | grep php7.2
RUN apt-get -y --fix-missing update
RUN apt-get -y install nginx \
	php7.2 \
	php7.2-fpm \
	php7.2-cli \
	php7.2-gd \
	php7.2-intl \
	php7.2-common \
	php7.2-mysql \
	php7.2-curl \
	curl \
	lynx-cur \
	php7.2-dom \
	zip \
	unzip \
	php7.2-xml \
	php7.2-zip \
	php7.2-mbstring \
	php7.2-json \
	php7.2-opcache \
	php7.2-dev \
	php7.2-sqlite \
	git \
	vim

RUN apt-cache search php7.2

# Install node & NPM
RUN apt-get -y --fix-missing update
RUN curl -sL https://deb.nodesource.com/setup_11.x
RUN apt-get -y --fix-missing update
RUN apt-get -y install nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node

# Get latest node (It's getting the older versions for some reason even with curl -sL https://deb.nodesource.com/setup_11.x)
RUN npm cache clean -f
RUN npm install -g n
RUN n stable

RUN apt-get -y --fix-missing update
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN curl -s https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

RUN mkdir -p /var/www/vhost/app/react-integration

RUN echo "cgi.fix_pathinfo=0" >> /etc/php/7.2/fpm/php.ini
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

RUN rm /etc/nginx/sites-enabled/default
ADD ./react-integration-nginx.conf /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/react-integration-nginx.conf /etc/nginx/sites-enabled/react-integration

RUN chown -R www-data:www-data /var/www/vhost/app/react-integration
RUN chmod -R g+w /var/www/vhost/app/react-integration

COPY start.sh /

RUN chmod +x /start.sh

# NGINX
EXPOSE 80
# NPM
EXPOSE 3000
# Laravel (mix)
EXPOSE 8080

CMD ["/start.sh"]
