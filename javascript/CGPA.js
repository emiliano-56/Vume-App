$(document).ready(function() {
    var num_semesters = 0;
  
    // Function to add a semester field
    function addSemesterField() {
      num_semesters++;
      var html = '<div class="form-group" id="semester' + num_semesters + '_group">';
      html += '<label for="semester' + num_semesters + '">Semester ' + num_semesters + ':</label>';
      html += '<div class="row">';
      html += '<div class="col">';
      html += '<input type="number" step="0.01" min="0" max="5" class="form-control semester_gpa" id="semester' + num_semesters + '_gpa" name="semester' + num_semesters + '_gpa" placeholder="GPA" required>';
      html += '<div class="invalid-feedback">Please enter a valid GPA (0-5).</div>';
      html += '</div>';
      html += '<div class="col">';
      html += '<input type="number" class="form-control semester_credits" id="semester' + num_semesters + '_credits" name="semester' + num_semesters + '_credits" placeholder="Total Credits" required>';
      html += '<div class="invalid-feedback">Please enter a valid total credits (non-negative).</div>';
      html += '</div>';
      html += '<div class="col">';
      html += '<button type="button" class="btn btn-danger remove_semester" data-semester="' + num_semesters + '">Remove</button>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      $("#semester_fields").append(html);
    }
  
    // Function to remove a semester field
    $(document).on('click', '.remove_semester', function() {
      var semester = $(this).data('semester');
      $("#semester" + semester + "_group").remove();
    });
  
    // Add semester field when clicking "Add Semester" button
    $("#add_semester").click(addSemesterField);
  
    // Submit form via AJAX
    $("#cgpaForm").submit(function(event) {
      event.preventDefault();
      var form = $(this);
      var url = form.attr('action');
      var formData = form.serialize();
      
      // Client-side validation
      var valid = true;
      var entered_semesters = parseInt($("#num_semesters").val());
  
      if (!(/^\d+$/.test($("#num_semesters").val())) || entered_semesters < 1) {
        $("#num_semesters").addClass("is-invalid");
        valid = false;
      } else {
        $("#num_semesters").removeClass("is-invalid");
      }
  
      if ($(".form-group[id^='semester']").length !== entered_semesters) {
        $("#semester_fields").addClass("is-invalid");
        valid = false;
      } else {
        $("#semester_fields").removeClass("is-invalid");
      }
  
      $(".semester_gpa").each(function() {
        var gpa = parseFloat($(this).val());
        if (isNaN(gpa) || gpa < 0 || gpa > 5) {
          $(this).addClass("is-invalid");
          valid = false;
        } else {
          $(this).removeClass("is-invalid");
        }
      });
  
      $(".semester_credits").each(function() {
        var credits = parseInt($(this).val());
        if (isNaN(credits) || credits < 0) {
          $(this).addClass("is-invalid");
          valid = false;
        } else {
          $(this).removeClass("is-invalid");
        }
      });
  
      if (valid) {
        $.post(url, formData, function(data) {
          $('#cgpaResult').text('Your CGPA is: ' + data);
        });
      } else {
        $('#cgpaResult').text('');
      }
    });
  });
  
  