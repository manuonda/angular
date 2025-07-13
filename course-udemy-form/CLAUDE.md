# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 19 project for learning and implementing different form approaches. The application demonstrates template-driven and reactive forms in Angular. It's a course project focused on form handling patterns.

## Development Commands

### Core Development
- `npm start` or `ng serve` - Start development server (http://localhost:4200)
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode for development
- `npm test` - Run unit tests with Karma/Jasmine

### Angular CLI Commands
- `ng generate component component-name` - Generate new component
- `ng generate --help` - See all available schematics

## Architecture

### Project Structure
- **Component Prefix**: `cs` (defined in angular.json)
- **Styling**: SCSS is used throughout the project
- **Angular Features**: Standalone components, strict TypeScript configuration

### Key Directories
- `src/app/components/` - Reusable UI components (e.g., navbar)
- `src/app/views/` - Page-level components for different form examples
  - `reactive-form/` - Reactive forms implementation
  - `template-form/` - Template-driven forms implementation

### Configuration
- **TypeScript**: Strict mode enabled with Angular strict templates
- **Bundling**: Uses Angular's application builder
- **Testing**: Karma + Jasmine setup
- **Styling**: Global styles in `src/styles.scss`

## Development Notes

### Component Generation
When creating new components, the CLI will automatically use the `cs` prefix and SCSS styling based on the angular.json configuration.

### Form Implementation
This project is specifically designed to demonstrate different Angular form approaches:
- Template-driven forms in `template-form` component
- Reactive forms in `reactive-form` component

### Build Configuration
- Production builds are optimized with budgets: 500kB warning, 1MB error for initial bundle
- Component styles limited to 4kB warning, 8kB error