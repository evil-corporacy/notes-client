/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        domains: ['source.unsplash.com'], // Добавьте хост "source.unsplash.com" в список доверенных хостов
    },
}

module.exports = withMDX(nextConfig)
