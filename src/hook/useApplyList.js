const useApplyList = ({ limit }) => {
  const applyList = Array.apply(null, Array(limit)).map((_, i) => i + 1)
  return { applyList }
}

export default useApplyList
