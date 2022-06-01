//  TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//  APPROVE REJECT MODAL
var statusActionModal = document.getElementById('statusActionModal')
statusActionModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var status = button.getAttribute('data-bs-whatever')

  // Update the modal's content.
  var modalTitle = statusActionModal.querySelector('.modal-title')
  // var modalBodyInput = statusActionModal.querySelector('.modal-body textarea')

  modalTitle.textContent = status + ' Comment '
  // modalBodyInput.value = status
});

$('#myModal').on('show.bs.modal', function (e) {
  var link = $(e.relatedTarget);
  var modal = $(this);
  modal.find('.modal-content').load(link.attr("data-bs-href"));
});
