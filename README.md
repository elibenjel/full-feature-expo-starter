# 🚀 Expo Feature-Rich Starter Pack

A comprehensive Expo app starter pack. This starter includes Supabase backend integration, GraphQL code generation, React Query for state management, typesafe internationalization, and RNUIlib UI component library.

## ✨ Features

### 🔐 Authentication & Backend

- **Supabase Integration** - Authentication system with session management
- **GraphQL Code Generation** - Auto-generated TypeScript types and React Query hooks
- **React Query (TanStack Query)** - Powerful data fetching and caching
- **Multi-environment Support** - Development, preview, and production configurations

### 🌍 Internationalization

- **Typesafe i18n** - Type-safe internationalization with automatic type generation
- **Multi-language Support** - Built-in French translations with extensible structure
- **Locale Detection** - Automatic locale detection and fallback handling

### 🎨 UI & Components

- **React Native UI Lib** - Comprehensive UI component library
- **Custom UI Components** - Pre-built components with consistent design system
- **Animation Support** - Smooth animations with Reanimated and Lottie
- **Responsive Design** - Cross-platform responsive layouts

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- Supabase account

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd <cloned-folder>
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# App Variant (development/preview/production)
APP_VARIANT=development

or call the npm scripts using cross-env
```

### 3. Start Development

```bash
# Start development server
npm run start:dev

# Run on Android
npm run android:dev

# Run on iOS
npm run ios:dev

# Run on Web
npm run web:dev
```

## 🏗 Project Structure

```
├── app/                    # Expo Router pages
├── src/
│   ├── features/          # Feature modules
│   │   └── auth/          # Authentication feature
│   ├── i18n/              # Internationalization
│   ├── lib/ui/            # UI components library façade
│   ├── localization/      # Localization utilities
│   ├── resources/         # Assets and themes
│   └── utils/             # Utility functions
├── static/                # Static assets
├── patches/               # Package patches (temporary -- fix for a bug in rnuilib with android new architecture)
└── config files...
```

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project
2. Update your `.env` file with project credentials
3. Configure authentication providers as needed (default login screen uses otp)

### GraphQL Code Generation

The project uses GraphQL Code Generator to automatically generate TypeScript types and React Query hooks:

```bash
# Generate types and hooks (watch mode enabled)
npm run generate
```

### Internationalization

Add new languages by creating translation files in `src/i18n/`:

```bash
# Generate types for new translations
npm run ti18n
```

## 📱 Available Scripts

### Development

```bash
npm run start:dev          # Start development server
npm run android:dev        # Run on Android
npm run ios:dev           # Run on iOS
npm run web:dev           # Run on Web
```

### Building

```bash
npm run prebuild:dev      # Prebuild for development
npm run rebuild:dev       # Clean prebuild for development
```

### Code Quality

```bash
npm run lint              # Run ESLint
npm run format            # Format code with Prettier
npm run format:check      # Check code formatting
```

### EAS Build

```bash
npm run eas:preview       # Build preview APK
npm run eas:preview:info  # Get project info
npm run eas:preview:update # Update preview build
```

## 🎯 Key Features Explained

### Supabase Auth

Built-in login flow, assuming a supabase project is setup and available to the app.
Things to configure:

- a supabase project with otp signup enabled, and redirect urls configured to redirect to the scheme of the app
- a .env file with SUPABASE_ANON_KEY variable set to the anon key of the supabase project
- the supabase project should have a check_email_exists function defined in the public schema, returning a boolean

### GraphQL with React Query

Auto-generated hooks for type-safe GraphQL operations.

```typescript
import { useGetUsersQuery } from '@/graphql/graphql'

function UsersList() {
  const { data, loading, error } = useGetUsersQuery()

  if (loading) return <Spinner />
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View>
      {data?.users?.map(user => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  )
}
```

The variable SUPABASE_URL must be set in .env, to the url of the supabase project.
Then codegen can be ran with:

```bash
npm run generate
```

It will fetch the schema through the graphql endpoint of the supabase project, and generate types and hooks based
on the graphql document queries found in the folder app, in .graphql files

### Internationalization

Type-safe translations with automatic completion:

```typescript
import { useLocalization } from '@/localization'

function WelcomeScreen() {
  const { LL } = useLocalization()

  return (
    <View>
      <Text>{LL.auth.welcome()}</Text>
      <Text>{LL.auth.loginButton()}</Text>
    </View>
  )
}
```

### UI Components

Consistent design system with pre-built components:

```typescript
import { View, Text, Button, Surface } from '@/lib/ui'

function MyScreen() {
  return (
   <View bg-screenBG padding-16>
      <Surface bg-backgroundPrimaryLight center>
        <Text $textNeutral text70BO>Welcome</Text>
        <Button label="Get Started" onPress={() => {}} />
      </Surface>
   </View>
  )
}
```

## 🔄 Multi-Environment Support

The app supports three environments with different configurations:

- **Development**: Local development with hot reload
- **Preview**: Staging environment for testing
- **Production**: Production-ready builds

Each environment has its own:

- App identifier (bundle ID/package name)
- Supabase project
- GraphQL endpoint
- Build configuration

## 📦 Dependencies

### Core

- **Expo SDK 53** - Latest Expo SDK with all features
- **React Native 0.79** - Latest React Native version
- **TypeScript** - Full type safety
- **zustand** - State management

### Backend & Data

- **@supabase/supabase-js** - Supabase client
- **@tanstack/react-query** - Data fetching and caching
- **graphql** - GraphQL client
- **@graphql-codegen/cli** - Code generation

### UI & Animation

- **react-native-ui-lib** - UI component library
- **react-native-reanimated** - Animations
- **lottie-react-native** - Lottie animations
- **@shopify/react-native-skia** - Image library

### Internationalization

- **typesafe-i18n** - Type-safe i18n
- **@formatjs/intl-\*** - Intl polyfills

### Development

- **expo-dev-client** - Development client
- **@dev-plugins/react-query** - React Query dev tools

## 🚀 Deployment

### EAS Build

The project is configured for EAS Build with multiple profiles (in eas.json):

```bash
# Build development APK
eas build --profile development --platform android

# Build preview APK
eas build --profile preview --platform android

# Build production
eas build --profile production --platform android
```

Built with ❤️ and with continuous improvement in mind.
