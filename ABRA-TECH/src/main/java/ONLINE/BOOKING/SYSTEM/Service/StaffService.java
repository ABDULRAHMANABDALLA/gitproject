package ONLINE.BOOKING.SYSTEM.Service;

import ONLINE.BOOKING.SYSTEM.Model.Staff;
import ONLINE.BOOKING.SYSTEM.Repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffService {

    @Autowired
    private StaffRepository staffRepository;

    public Staff saveStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    public List<Staff> listStaff() {
        return staffRepository.findAll();
    }

    public long countStaff() {
        return staffRepository.count();
    }

    public Staff updateStaff(Long id, Staff staff) {
        Optional<Staff> existingStaff = staffRepository.findById(id);
        if (existingStaff.isPresent()) {
            Staff updatedStaff = existingStaff.get();
            updatedStaff.setStaffName(staff.getStaffName());
            updatedStaff.setStaffEmail(staff.getStaffEmail());
            return staffRepository.save(updatedStaff);
        } else {
            throw new RuntimeException("Staff not found with id = " + id);
        }
    }

    public Optional<Staff> findStaffById(Long id) {
        return staffRepository.findById(id);
    }

    public void deleteStaff(Long id) {
        staffRepository.deleteById(id);
    }
}
