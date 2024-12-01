using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class CompletedTask
    {
        public DateTime CompleteDate { get; set; }
        [Required]
        public string UserId { get; set; } = null!;
        [JsonIgnore]
        public User? User { get; set; }
        [Required]
        public string TaskId { get; set; } = null!;
        [JsonIgnore]
        public Task? Task { get; set; }
        // TODO:
        [JsonIgnore]
        public string? SpecialReportId { get; set; }
    }
}
