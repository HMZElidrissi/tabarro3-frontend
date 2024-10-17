import { useTranslation } from "@/app/lib/useTranslation";

const MapComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white" id="map">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <h2 className="text-4xl font-bold text-center text-primary-600 mb-8">
          {t("map.title")}
        </h2>
        <div className="aspect-w-16 aspect-h-9 shadow-2xl rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1_xdkOSpnMwENS7n6ghlSze4L3rtDIXM&ehbc=2E312F"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
