const LABEL_CLASS = "mb-2 block text-sm font-semibold text-foreground";

function FormField({ id, label, required, children, className = "" }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className={LABEL_CLASS}>
          {label} {required && "*"}
        </label>
      )}
      {children}
    </div>
  );
}

export default FormField;
