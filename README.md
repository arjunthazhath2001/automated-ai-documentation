# AI Docs Landing Page

A premium-style landing page for an AI-powered documentation service, built with React and TailwindCSS.

## Features

- 🎨 **Premium Design**: Clean, modern aesthetic inspired by Notion, Linear, and Stripe
- 📱 **Responsive**: Optimized for desktop and mobile devices
- ✉️ **Email Capture**: Integrated with Supabase for subscriber management
- 🚀 **Modern Tech Stack**: React 18, TailwindCSS, and modern JavaScript
- 🔒 **Secure**: Built with security best practices

## Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Styling**: TailwindCSS with custom design system
- **Backend**: Supabase for email storage
- **Build Tool**: Create React App
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - Create a table called `subscribers` with the following schema:
     ```sql
     CREATE TABLE subscribers (
       id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
       email TEXT UNIQUE NOT NULL,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
     );
     ```
   - Get your project URL and anon key from Settings > API

4. **Configure environment variables**
   ```bash
   cp env.example .env
   ```
   Then edit `.env` with your Supabase credentials:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_project_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── HeroSection.js      # Main hero section
│   ├── HowItWorksSection.js # How it works explanation
│   ├── WhoItsForSection.js  # Target audience
│   ├── ValuePropsSection.js # Value propositions
│   ├── CTASection.js        # Call to action
│   └── EmailSignup.js       # Email capture form
├── App.js              # Main app component
├── index.js            # App entry point
├── index.css           # Global styles
└── supabase.js         # Supabase client
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- Primary colors: Blue-based theme
- Gray scale: Neutral grays
- Custom gradients and shadows

### Content
Update the content in each component file:
- Headlines and descriptions
- Target audience descriptions
- Value propositions
- Call-to-action text

### Styling
Modify `src/index.css` for:
- Custom CSS classes
- Additional animations
- Global style overrides

## Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Add environment variables in Vercel dashboard

### Manual Deployment
1. Run `npm run build`
2. Upload the `build` folder to your web server

## Database Schema

The `subscribers` table stores email addresses:

```sql
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository. 