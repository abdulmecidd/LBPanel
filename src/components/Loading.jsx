import Card from "./Card";
function Loading() {
  return (
    <>
      <Card>
        <div class="bg-jungle-mist-50 shadow-sm h-auto rounded-md">
          <div className="p-sm animate-pulse">
            <div class="h-4 bg-indigo-200 rounded-md w-48 text-left mb-4"></div>
            <div class="h-24 bg-indigo-200 rounded-md max-w-[360px] mb-2"></div>
            <div class="h-12 bg-indigo-200 rounded-md max-w-[360px] mb-2"></div>
          </div>
        </div>
      </Card>
    </>
  );
}
export default Loading;
