#!/bin/bash

# ElderCare Connect - Development Setup Script
# This script sets up the development environment with one command

set -e

echo "🚀 Setting up ElderCare Connect development environment..."

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Set up environment variables
echo "🔧 Setting up environment variables..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created .env file from .env.example"
    echo "⚠️  Please update .env with your configuration"
else
    echo "✅ .env file already exists"
fi

# Generate Prisma client
echo "🗄️  Setting up database..."
npx prisma generate
npx prisma migrate dev --name init

# Set up Git hooks
echo "🪝 Setting up Git hooks..."
npm run prepare

# Run initial tests
echo "🧪 Running initial tests..."
npm run test:unit src/lib/__tests__/validations.test.ts

# Type check
echo "🔍 Running type check..."
npm run type-check

# Build check
echo "🏗️  Testing production build..."
npm run build

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update .env with your configuration"
echo "2. Start development: npm run dev"
echo "3. Or use Docker: docker-compose up --build"
echo ""
echo "🔗 Useful commands:"
echo "  npm run dev          - Start development server"
echo "  npm run db:studio    - Open database admin"
echo "  npm run test         - Run tests"
echo "  npm run lint         - Check code quality"
echo ""
echo "📚 Documentation: README.md"
echo "🔒 Security: SECURITY.md"