export interface NavLink {
	href: string;
	label: string;
}

export const navLinks: NavLink[] = [
	{ href: "#profe", label: "Profe" },
	{ href: "#agenda", label: "Agenda" },
	{ href: "#riders", label: "Riders" },
	{ href: "#galeria", label: "Galería" },
	{ href: "#precios", label: "Precios" },
	{ href: "#spots", label: "Spots" },
];

// TODO: reemplazar por el link real de WhatsApp (wa.me/<numero>)
export const whatsappUrl = "#";

export const socialLinks = [
	{
		href: "https://www.instagram.com/flowlifebm/",
		label: "↗ Instagram — @flowlife.bmx",
	},
	// { href: "#", label: "↗ TikTok — @flowlife.bmx" },
	{
		href: "https://www.youtube.com/@Flowlifebm",
		label: "↗ YouTube — Flow Life BMX",
	},
	// { href: "mailto:hola@flowlife.bmx", label: "✉ hola@flowlife.bmx" },
];
