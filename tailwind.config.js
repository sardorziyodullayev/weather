/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				sm: "var(--radius-sm)",
				md: "var(--radius-md)",
				lg: "var(--radius-lg)",
				xl: "var(--radius-xl)",
			},
			colors: {
				border: "oklch(var(--color-border))",
				input: "oklch(var(--color-input))",
				ring: "oklch(var(--color-ring))",
				background: "oklch(var(--color-background))",
				foreground: "oklch(var(--color-foreground))",
				primary: {
					DEFAULT: "oklch(var(--color-primary))",
					foreground: "oklch(var(--color-primary-foreground))",
				},
				secondary: {
					DEFAULT: "oklch(var(--color-secondary))",
					foreground: "oklch(var(--color-secondary-foreground))",
				},
				muted: {
					DEFAULT: "oklch(var(--color-muted))",
					foreground: "oklch(var(--color-muted-foreground))",
				},
				accent: {
					DEFAULT: "oklch(var(--color-accent))",
					foreground: "oklch(var(--color-accent-foreground))",
				},
				destructive: "oklch(var(--color-destructive))",
				card: {
					DEFAULT: "oklch(var(--color-card))",
					foreground: "oklch(var(--color-card-foreground))",
				},
				popover: {
					DEFAULT: "oklch(var(--color-popover))",
					foreground: "oklch(var(--color-popover-foreground))",
				},
			},
		},
	},
	plugins: [],
};
