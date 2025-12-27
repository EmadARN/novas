const PreviewModal = ({ open, data, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">جزئیات</h2>

        <div className="space-y-2 text-gray-700">
          {Object.entries(data).map(([k, v]) => (
            <p key={k}>
              <strong>{k}:</strong> {String(v)}
            </p>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
};
export default PreviewModal;