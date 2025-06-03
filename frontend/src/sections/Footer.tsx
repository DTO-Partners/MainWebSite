import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Building,
  FileText,
  Shield,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Footer() {
  const headquarters = {
    lat: 54.352,
    lng: 18.6466,
    address: "Jana Heweliusza 11/lokal 811",
    city: "80-890 Gdańsk",
    country: "Poland",
  };

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const contactInfo = [
    {
      icon: Mail,
      label: "Candidates",
      value: "candidates@dtopartners.com",
      href: "mailto:candidates@dtopartners.com",
    },
    {
      icon: Building,
      label: "Business",
      value: "business@dtopartners.com",
      href: "mailto:business@dtopartners.com",
    },
    {
      icon: Mail,
      label: "General",
      value: "info@dtopartners.com",
      href: "mailto:info@dtopartners.com",
    },
  ];

  const phoneNumbers = [
    { number: "+48 500 785 691", href: "tel:+48500785691" },
    { number: "+48 573 729 525", href: "tel:+48573729525" },
  ];

  const companyData = [
    { icon: FileText, label: "KRS", value: "0001158155" },
    { icon: FileText, label: "REGON", value: "540998109" },
    { icon: FileText, label: "NIP", value: "5833531476" },
    { icon: Shield, label: "KRAZ", value: "33616" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Globe, href: "#", label: "Website" },
  ];

  return (
    <APIProvider apiKey={apiKey}>
      <footer
        id="Contact"
        className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(218,165,32,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(218,165,32,0.05),transparent_50%)]" />

        <div className="relative">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Google Maps Section */}
            <motion.div
              className="relative h-[400px] lg:h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/20 to-transparent z-10" />
              
              {/* Google Maps */}
              <div className="h-full w-full">
                <Map
                  style={{ width: '100%', height: '100%' }}
                  defaultCenter={headquarters}
                  defaultZoom={15}
                  gestureHandling={'cooperative'}
                  disableDefaultUI={false}
                  mapTypeControl={false}
                  streetViewControl={false}
                  fullscreenControl={false}
                  styles={[
                    {
                      featureType: "all",
                      elementType: "geometry.fill",
                      stylers: [{ saturation: -100 }]
                    },
                    {
                      featureType: "all",
                      elementType: "geometry.stroke",
                      stylers: [{ saturation: -100 }]
                    }
                  ]}
                >
                  <Marker
                    position={headquarters}
                    title="DTO Partners Headquarters"
                  />
                </Map>
              </div>

              {/* Location Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <motion.div
                  className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 border border-[#daa520]/20 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#daa520] to-[#daa520]/80 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#1a1a2e] font-bold text-lg mb-1">
                        Headquarters
                      </h3>
                      <p className="text-[#1a1a2e]/80 text-sm leading-relaxed">
                        {headquarters.address}
                        <br />
                        {headquarters.city}
                        <br />
                        {headquarters.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            {/* Company Information Section */}
            <motion.div
              className="p-8 lg:p-12 flex flex-col justify-between"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Company Header */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-light text-white mb-4">
                    DTO{" "}
                    <span className="font-bold text-[#daa520]">Partners</span>
                  </h2>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-[#daa520] to-transparent mb-6" />
                  <p className="text-white/80 leading-relaxed max-w-md">
                    Excellence in executive search and strategic recruitment.
                    Connecting exceptional talent with visionary organizations
                    across global markets.
                  </p>
                </motion.div>
              </div>
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Email Contacts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-4 text-lg">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                    {contactInfo.map((contact, _) => (
                      <motion.a
                        key={contact.label}
                        href={contact.href}
                        className="flex items-center gap-3 text-white/80 hover:text-[#daa520] transition-colors duration-300 group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#daa520]/20 transition-colors duration-300">
                          <contact.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-wider">
                            {contact.label}
                          </p>
                          <p className="text-sm font-medium">{contact.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
                {/* Phone Numbers */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-4 text-lg">
                    Phone Numbers
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {phoneNumbers.map((phone, _) => (
                      <motion.a
                        key={phone.number}
                        href={phone.href}
                        className="flex items-center gap-3 bg-white/10 hover:bg-[#daa520]/20 rounded-lg px-4 py-3 text-white/80 hover:text-[#daa520] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {phone.number}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
                {/* Company Registration Data */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-4 text-lg">
                    Company Registration
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {companyData.map((data, _) => (
                      <div
                        key={data.label}
                        className="flex items-center gap-2 text-white/70 text-sm"
                      >
                        <data.icon className="w-4 h-4 text-[#daa520]/70" />
                        <span className="font-medium">{data.label}:</span>
                        <span>{data.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-4 text-lg">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, _) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 hover:bg-[#daa520] rounded-lg flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* Bottom Bar */}
          <motion.div
            className="border-t border-white/10 px-8 py-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm">
                © {new Date().getFullYear()} DTO Partners Sp. z o.o. All rights
                reserved.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#"
                  className="text-white/60 hover:text-[#daa520] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#daa520] transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#daa520] transition-colors duration-300"
                >
                  GDPR Compliance
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </APIProvider>
  );
}
