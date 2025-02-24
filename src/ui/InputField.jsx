const InputField = ({ type = "text", placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-black text-white py-2 px-4 rounded-sm outline-none my-2 shadow-lg shadow-gray-800"
        />
    );
};

export default InputField;
