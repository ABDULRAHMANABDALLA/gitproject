package ONLINE.BOOKING.SYSTEM.Controller;

import ONLINE.BOOKING.SYSTEM.Model.Staff;
import ONLINE.BOOKING.SYSTEM.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/staff")
public class StaffController {

    @Autowired
    private StaffService staffService;

    @PostMapping("/post-staff")
    public Staff postStaff(@RequestBody Staff staff) {
        return staffService.saveStaff(staff);
    }

    @GetMapping("/get-staff")
    public List<Staff> listStaff() {
        return staffService.listStaff();
    }

    @GetMapping("/count-staff")
    public long countStaff() {
        return staffService.countStaff();
    }

    @DeleteMapping("/delete-staff/{id}")
    public void deleteStaff(@PathVariable Long id) {
        staffService.deleteStaff(id);
    }

    @PutMapping("/staff/{id}")
    public Staff updateStaff(@PathVariable Long id, @RequestBody Staff staff) {
        return staffService.updateStaff(id, staff);
    }

    @GetMapping("/staff/{id}")
    public Optional<Staff> findStaffById(@PathVariable Long id) {
        return staffService.findStaffById(id);
    }
}
